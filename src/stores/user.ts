import {create} from 'zustand';

interface IUser {
  type: 'KAKAO' | 'APPLE';
  nickname: string;
  profileNumber: number;
  email: string;
  name: string;
  isLookAround: boolean;
}

interface IUserStoreState {
  user: IUser;
  idToken: string;
}
interface IUserStoreActions {
  setUser: (state: IUser) => void;
  setIdToken: (state: string) => void;
}

export const useUserStore = create<IUserStoreState & IUserStoreActions>(
  set => ({
    user: {
      type: 'KAKAO',
      nickname: '',
      profileNumber: 0,
      email: '',
      name: '',
      isLookAround: false,
    },
    idToken: '',
    setUser: (state: IUser) => set({user: state}),
    setIdToken: (state: string) => set({idToken: state}),
  }),
);
