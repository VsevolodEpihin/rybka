import { create } from 'zustand';

export type ModalType = 'auth' | 'reg';

interface AuthForm {
  login: string;
  password: string;
}

interface AuthStore {
  form: AuthForm;
  isLoading: boolean;
  error: string | null;
  setField: (field: keyof AuthForm, value: string) => void;
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

const useAuthStore = create<AuthStore>((set) => ({
  form: initialForm,
  isLoading: false,
  error: null,
  modal: 'auth',
  isOpen: true,
  prevPath: '/',
  setField: (field, value) => set((state) => ({
    form: { ...state.form, [field]: value }
  })),
  setModal: (modal) => set({ modal }),
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  setPrevPath: (path) => set({ prevPath: path }),
  login: async () => {
    set({ isLoading: true, error: null });
    try {
      // Здесь должен быть вызов API авторизации
      await new Promise((res) => setTimeout(res, 1000));
      // После успешной авторизации можно сбросить форму или показать успех
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
