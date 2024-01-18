import {create} from 'zustand';

interface ISearchStoreState {
  searchResults: string[];
}

interface ISearchStoreActions {
  setSearchResults: (state: string[]) => void;
}

export const useSearchStore = create<ISearchStoreState & ISearchStoreActions>(
  set => ({
    searchResults: [],
    setSearchResults: (state: string[]) => set({searchResults: [...state]}),
  }),
);
