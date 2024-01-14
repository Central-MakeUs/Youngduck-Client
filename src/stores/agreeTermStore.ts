import {create} from 'zustand';

interface StoreState {
  allAgree: boolean;
  isFinishAgree: boolean;
}

interface StoreAction {
  setAllAgree: (allAgree: boolean) => void;
  setIsFinishAgree: (isFinishAgree: boolean) => void;
}

export const useAgreeTermStore = create<StoreState & StoreAction>(set => ({
  allAgree: false,
  isFinishAgree: false,
  setAllAgree: (state: boolean) => set({allAgree: state}),
  setIsFinishAgree: (state: boolean) => set({isFinishAgree: state}),
}));
