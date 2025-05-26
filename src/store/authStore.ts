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

interface AuthStore {
  form: AuthForm;
  isLoading: boolean;
  error: string | null;
  validationErrors: ValidationErrors;
  setField: (field: keyof AuthForm, value: string) => void;
  validateField: (field: keyof AuthForm) => void;
  validateForm: () => boolean;
  login: () => Promise<void>;
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
  modal: 'auth',
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
      await authLogin(get().form);
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
}));

export default useAuthStore;
