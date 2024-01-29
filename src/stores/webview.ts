import {create} from 'zustand';

interface IWebviewStoreState {
  isVisited: boolean;
}
interface IWebviewStoreActions {
  setWebviewIsVisited: (state: boolean) => void;
}

export const useWebviewStore = create<
  IWebviewStoreState & IWebviewStoreActions
>(set => ({
  isVisited: false,
  setWebviewIsVisited: (state: boolean) => set({isVisited: state}),
}));
