import {create} from 'zustand';

interface IPosterImageStoreState {
  posterImage: string;
}
interface IPosterImageStoreActions {
  setPosterImage: (state: string) => void;
}

export const usePosterImageStore = create<
  IPosterImageStoreState & IPosterImageStoreActions
>(set => ({
  posterImage: '',
  setPosterImage: (state: string) => set({posterImage: state}),
}));
