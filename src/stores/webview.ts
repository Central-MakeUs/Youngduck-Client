import {create} from 'zustand';

interface IWebviewContent {
  isVisited: boolean;
  uri: string;
}
interface IWebviewStoreState {
  webview: IWebviewContent;
}
interface IWebviewStoreActions {
  setWebview: (state: IWebviewContent) => void;
}

export const useWebviewStore = create<
  IWebviewStoreState & IWebviewStoreActions
>(set => ({
  webview: {
    isVisited: false,
    uri: '',
  },
  setWebview: (state: IWebviewContent) => set({webview: state}),
}));
