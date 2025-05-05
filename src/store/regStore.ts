import { create } from 'zustand';

export interface RegForm {
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: string;
  city: string;
  gender: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  occupation: string;
  education: string;
  gradYear: string;
  experience: string;
  english: string;
  priority: string;
  agree: boolean;
}

interface RegStore {
  form: RegForm;
  isLoading: boolean;
  error: string | null;
  setField: (field: keyof RegForm, value: string | boolean) => void;
  register: () => Promise<void>;
}

const initialForm: RegForm = {
  lastName: '',
  firstName: '',
  middleName: '',
  birthDate: '',
  city: '',
  gender: 'female',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
  occupation: '',
  education: '',
  gradYear: '',
  experience: '',
  english: '',
  priority: '',
  agree: false,
};

const useRegStore = create<RegStore>((set) => ({
  form: initialForm,
  isLoading: false,
  error: null,
  setField: (field, value) => set((state) => ({
    form: { ...state.form, [field]: value }
  })),
  register: async () => {
    set({ isLoading: true, error: null });
    try {
      // Здесь должен быть вызов API регистрации
      await new Promise((res) => setTimeout(res, 1000));
      // После успешной регистрации можно сбросить форму или показать успех
    } catch (err: unknown) {
      if(err instanceof Error) {
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