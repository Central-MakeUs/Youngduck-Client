import {IAppleUser} from '@/types/user';
import {create} from 'zustand';

interface IUser {
  type: 'KAKAO' | 'APPLE';
  nickname: string;
  profileNumber: number;
  isLookAround: boolean;
}

interface IUserStoreState {
  user: IUser;
  appleUser: IAppleUser;
}
interface IUserStoreActions {
  setUser: (state: IUser) => void;
  setAppleUser: (state: IAppleUser) => void;
}

export const useUserStore = create<IUserStoreState & IUserStoreActions>(
  set => ({
    user: {
      type: 'KAKAO',
      nickname: '',
      profileNumber: 0,
      isLookAround: false,
    },
    appleUser: {name: '', email: ''},
    setUser: (state: IUser) => set({user: state}),
    setAppleUser: (state: IAppleUser) => set({appleUser: state}),
  }),
);
