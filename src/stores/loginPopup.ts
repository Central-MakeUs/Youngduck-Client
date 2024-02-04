import {create} from 'zustand';

interface ILoginPopupStoreState {
  loginPopup: boolean;
}
interface ILoginPopupStoreActions {
  setLoginPopup: (state: boolean) => void;
}

export const useLoginPopupStore = create<
  ILoginPopupStoreActions & ILoginPopupStoreState
>(set => ({
  loginPopup: false,
  setLoginPopup: (state: boolean) => set({loginPopup: state}),
}));
