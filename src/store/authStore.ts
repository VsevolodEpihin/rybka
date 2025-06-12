import { create } from 'zustand';
import { authLogin } from '../api/authLoginApi';

export type ModalType = 'auth' | 'reg';

interface AuthForm {
  login: string;
  password: string;
}

interface ValidationErrors {
  login?: string;
  password?: string;
}

interface User {
  id: string;
  email: string;
  // добавьте другие поля пользователя, которые приходят с сервера
}

interface AuthStore {
  form: AuthForm;
  isLoading: boolean;
  error: string | null;
  validationErrors: ValidationErrors;
  user: User | null;
  token: string | null;
  role: string;
  setField: (field: keyof AuthForm, value: string) => void;
  validateField: (field: keyof AuthForm) => void;
  validateForm: () => boolean;
  login: () => Promise<void>;
  logout: () => void;
  modal: ModalType;
  setModal: (modal: ModalType) => void;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  prevPath: string;
  setPrevPath: (path: string) => void;
}

const initialForm: AuthForm = {
  login: '',
  password: '',
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{10,14}$/;
  return phoneRegex.test(phone);
};

const useAuthStore = create<AuthStore>((set, get) => ({
  form: initialForm,
  isLoading: false,
  error: null,
  validationErrors: {},
  user: null,
  token: localStorage.getItem('token'),
  modal: 'auth',
  role: 'user',
  isOpen: true,
  prevPath: '/',
  setField: (field, value) => set((state) => ({
    form: { ...state.form, [field]: value },
    validationErrors: { ...state.validationErrors, [field]: undefined }
  })),
  validateField: (field) => {
    const value = get().form[field];
    let error: string | undefined;

    if (!value) {
      error = 'Это поле обязательно';
    } else if (field === 'login') {
      if (!validateEmail(value) && !validatePhone(value)) {
        error = 'Введите корректный email или номер телефона';
      }
    } else if (field === 'password') {
      if (value.length < 6) {
        error = 'Пароль должен содержать минимум 6 символов';
      }
    }

    set((state) => ({
      validationErrors: { ...state.validationErrors, [field]: error }
    }));
  },
  validateForm: () => {
    const { form } = get();
    const errors: ValidationErrors = {};

    if (!form.login) {
      errors.login = 'Это поле обязательно';
    } else if (!validateEmail(form.login) && !validatePhone(form.login)) {
      errors.login = 'Введите корректный email или номер телефона';
    }

    if (!form.password) {
      errors.password = 'Это поле обязательно';
    } else if (form.password.length < 6) {
      errors.password = 'Пароль должен содержать минимум 6 символов';
    }

    set({ validationErrors: errors });
    return Object.keys(errors).length === 0;
  },
  setModal: (modal) => set({ modal }),
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setPrevPath: (path) => set({ prevPath: path }),
  login: async () => {
    if (!get().validateForm()) {
      return;
    }

    set({ isLoading: true, error: null });
    try {
      const { access_token, user } = await authLogin(get().form);
      const { role } = user
      localStorage.setItem('token', access_token);
      set({ token: access_token, user, role, error: null });
    } catch (err: unknown) {
      if(err instanceof Error) {
        set({ error: err.message || 'Ошибка авторизации' });
      } else {
        set({ error: 'Ошибка авторизации' });
      }
    } finally {
      set({ isLoading: false });
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ token: null, user: null });
  },
}));

export default useAuthStore;
