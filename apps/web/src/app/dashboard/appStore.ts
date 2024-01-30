import create from "zustand";
import { persist } from "zustand/middleware";

interface AppStoreState {
  dopen: boolean;
  rows: any[];
  setRows: (rows: any[]) => void;
  updateDopen: (dopen: boolean) => void;
}

const appStore = persist<AppStoreState>((set) => ({
  dopen: true,
  rows: [],
  setRows: (rows) => set((state) => ({ ...state, rows })),
  updateDopen: (dopen) => set((state) => ({ ...state, dopen })),
}), { name: "cdot_store_api" });

export const useAppStore = create(appStore);
