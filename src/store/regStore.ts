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

interface RegStore {
  form: AuthRegister;
  isLoading: boolean;
  error: string | null;
  setField: (field: keyof AuthRegister, value: string | boolean | string[]) => void;
  register: () => Promise<void>;
}

const initialForm: AuthRegister = {
  firstName: '',
  name: '',
  password:'',
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

const useRegStore = create<RegStore>((set, get) => ({
  form: initialForm,
  isLoading: false,
  error: null,
  setField: (field, value) => set((state) => ({
    form: { ...state.form, [field]: value }
  })),
  register: async () => {
    set({ isLoading: true, error: null });
    try {
      await authRegister(get().form);
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
