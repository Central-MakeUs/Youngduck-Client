import {LoginType} from '@/models/auth/entity';
import {IRegisterRequest} from '@/models/auth/request';
import {create} from 'zustand';

interface IUserContentState extends IRegisterRequest {
  type: LoginType;
  idToken: string;
}
interface IUserStoreState {
  user: IUserContentState;
}
interface IUserStoreActions {
  setUser: (state: IUserContentState) => void;
}

export const useUserStore = create<IUserStoreState & IUserStoreActions>(
  set => ({
    user: {
      type: 'KAKAO',
      idToken: '',
      nickname: '',
      lawAgreement: false,
      genres: [],
      name: '',
      email: '',
    },
    setUser: (state: IUserContentState) => set({user: state}),
  }),
);
