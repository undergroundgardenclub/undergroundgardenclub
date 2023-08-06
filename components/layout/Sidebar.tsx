import React from "react";
import { useStore } from "zustand";
import { sidebarStore } from "./useSidebar";
import { ProjectList } from "../projects/ProjectList";
import { EquipmentList } from "../equipment/EquipmentList";
import { HeaderActions } from "./HeaderActions";

export const Sidebar = () => {
  const sidebar = useStore(sidebarStore);
  // RENDER
  return (
    <aside>
      <HeaderActions invert />
      {sidebar.viewType === "projects" && <ProjectList />}
      {sidebar.viewType === "equipment" && <EquipmentList />}
    </aside>
  );
};
