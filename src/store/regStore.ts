import { create } from 'zustand';
import { authRegister } from '../api/authRegisterApi';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}

export enum EnglishLevel {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

export interface AuthRegister {
  firstName: string,
  name: string,
  password: string,
  confirmPassword: string,
  middleName: string,
  dateBirthday: string,
  city: string,
  photo: string,
  gender: Gender,
  tel: string,
  email: string,
  hobby: string,
  university: string,
  yearForRelease: string,
  experience: string,
  levelEng: EnglishLevel,
  priorityAreas: string[]
}

interface ValidationErrors {
  firstName?: string;
  name?: string;
  middleName?: string;
  dateBirthday?: string;
  city?: string;
  tel?: string;
  password?: string;
  confirmPassword?: string;
  email?: string;
}

interface User {
  id: string;
  email: string;
  // добавьте другие поля пользователя, которые приходят с сервера
}

interface RegStore {
  form: AuthRegister;
  isLoading: boolean;
  error: string | null;
  validationErrors: ValidationErrors;
  user: User | null;
  token: string | null;
  setField: (field: keyof AuthRegister, value: string | boolean | string[]) => void;
  validateField: (field: keyof AuthRegister) => void;
  validateForm: () => boolean;
  register: () => Promise<void>;
}

const initialForm: AuthRegister = {
  firstName: '',
  name: '',
  password: '',
  confirmPassword: '',
  middleName: '',
  dateBirthday: '',
  city: '',
  photo: '',
  gender: Gender.FEMALE,
  tel: '',
  email: '',
  hobby: '',
  university: '',
  yearForRelease: '',
  experience: '',
  levelEng: EnglishLevel.A1,
  priorityAreas: [],
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const useRegStore = create<RegStore>((set, get) => ({
  form: initialForm,
  isLoading: false,
  error: null,
  validationErrors: {},
  user: null,
  token: null,
  setField: (field, value) => set((state) => ({
    form: { ...state.form, [field]: value },
    validationErrors: { ...state.validationErrors, [field]: undefined }
  })),
  validateField: (field) => {
    const value = get().form[field];
    let error: string | undefined;

    if (typeof value === 'string') {
      if (!value && ['dateBirthday', 'city', 'middleName','firstName', 'name', 'password', 'email', 'tel'].includes(field)) {
        error = 'Это поле обязательно';
      } else if (field === 'email' && !validateEmail(value)) {
        error = 'Введите корректный email';
      } else if (field === 'password' && value.length < 6) {
        error = 'Пароль должен содержать минимум 6 символов';
      } else if (field === 'confirmPassword') {
        const password = get().form.password;
        if (value !== password) {
          error = 'Пароли не совпадают';
        }
      }
    }

    set((state) => ({
      validationErrors: { ...state.validationErrors, [field]: error }
    }));
  },
  validateForm: () => {
    const { form } = get();
    const errors: ValidationErrors = {};

    // Required fields validation
    if (!form.firstName) {
      errors.firstName = 'Это поле обязательно';
    }
    if (!form.name) {
      errors.name = 'Это поле обязательно';
    }
    if (!form.email) {
      errors.email = 'Это поле обязательно';
    } else if (!validateEmail(form.email)) {
      errors.email = 'Введите корректный email';
    }
    if (!form.password) {
      errors.password = 'Это поле обязательно';
    } else if (form.password.length < 6) {
      errors.password = 'Пароль должен содержать минимум 6 символов';
    }
    if (!form.confirmPassword) {
      errors.confirmPassword = 'Это поле обязательно';
    } else if (form.confirmPassword !== form.password) {
      errors.confirmPassword = 'Пароли не совпадают';
    }

    set({ validationErrors: errors });
    return Object.keys(errors).length === 0;
  },
  register: async () => {
    if (!get().validateForm()) {
      return;
    }

    set({ isLoading: true, error: null });
    try {
      const { token, user } = await authRegister(get().form);
      localStorage.setItem('token', token);
      set({ token, user, error: null });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message || 'Ошибка регистрации' });
      } else {
        set({ error: 'Ошибка регистрации' });
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useRegStore;
