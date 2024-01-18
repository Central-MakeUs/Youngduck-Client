import create from 'zustand';

interface ILocation {
  location: string;
  setLocation: (loc: string) => void;
}

const useLocationStore = create<ILocation>(set => ({
  location: '',
  setLocation: (loc: string) => set({location: loc}),
}));

export default useLocationStore;
