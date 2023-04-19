import { create } from "zustand";

export enum ViewMode {
  diagram = "diagram",
  list = "list",
}

type TUGCStore = {
  viewMode: ViewMode;
  setViewMode: (vis: ViewMode) => void;
};

export const ugcStore = create<TUGCStore>((set, get) => ({
  viewMode: ViewMode.diagram,
  setViewMode: (viewMode) => set({ viewMode }),
}));
