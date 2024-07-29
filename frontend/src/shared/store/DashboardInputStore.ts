import create from "zustand";

type DashboardInputStore = {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
};

export const useDashboardInputStore = create<DashboardInputStore>((set) => ({
  inputValue: "",
  setInputValue: (inputValue) => set({ inputValue }),
}));
