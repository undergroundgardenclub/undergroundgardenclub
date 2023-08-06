import React from "react";
import { createStore, useStore } from "zustand";

type TSidebarViewType = "projects" | "equipment";

type TSidebarStore = {
  viewType: TSidebarViewType;
  setViewType: (viewType: TSidebarViewType) => void;
};

export const sidebarStore = createStore<TSidebarStore>((set, get) => ({
  viewType: "projects",
  setViewType: (viewType) => set({ viewType }),
}));
