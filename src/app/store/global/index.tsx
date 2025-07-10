import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface GlobalState {
  isFirstOpen: boolean;
}

export const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      isFirstOpen: true,
      setIsFirstOpen: () =>
        set((state) => ({ isFirstOpen: state.isFirstOpen })),
    }),
    {
      name: "global-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
