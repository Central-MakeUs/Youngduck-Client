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
}
interface IUserStoreActions {
  setUser: (state: IUser) => void;
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
    setUser: (state: IUser) => set({user: state}),
  }),
);
