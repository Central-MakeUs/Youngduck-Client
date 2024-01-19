import {create} from 'zustand';

interface ILocationStoreState {
  location: string;
}
interface ILocationStoreActions {
  setLocation: (state: string) => void;
}

export const useLocationStore = create<
  ILocationStoreState & ILocationStoreActions
>(set => ({
  location: '',
  setLocation: (state: string) => set({location: state}),
}));
