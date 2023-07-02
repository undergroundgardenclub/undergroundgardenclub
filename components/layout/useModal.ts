import React from "react";
import { createStore, useStore } from "zustand";

type TModalStore = {
  component?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean, component?: React.ReactNode) => void;
};

export const modalStore = createStore<TModalStore>((set, get) => ({
  component: undefined,
  isOpen: false,
  setIsOpen: (isOpen, component) =>
    set({ component, isOpen: isOpen && component != null }),
}));
