import {IRegisterRequest} from '@/models/auth/request';
import {create} from 'zustand';

interface IUserStoreState {
  user: IRegisterRequest;
}
interface IUserStoreActions {
  setUser: (state: IRegisterRequest) => void;
}

export const useUserStore = create<IUserStoreState & IUserStoreActions>(
  set => ({
    user: {
      nickname: '',
      lawAgreement: false,
      genres: [],
      name: '',
      email: '',
    },
    setUser: (state: IRegisterRequest) => set({user: state}),
  }),
);
