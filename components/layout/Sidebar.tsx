import React, { useEffect, useState } from "react";
import { useStore } from "zustand";
import { sidebarStore } from "./useSidebar";
import { ProjectList } from "../projects/ProjectList";
import { EquipmentList } from "../equipment/EquipmentList";
import { HeaderActions } from "./HeaderActions";
import styled from "styled-components";

export const Sidebar: React.FC<{ alwaysShowLists?: boolean }> = ({
  alwaysShowLists,
}) => {
  const sidebar = useStore(sidebarStore);
  // HACK: doing some delayed loading bc classes/props aren't coloring right
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsLoaded(true));
  }, []);

  // RENDER
  return (
    <StyledSidebar>
      {isLoaded && (
        <>
          <HeaderActions invert />
          <div
            className={`sidebar__lists ${alwaysShowLists ? "always-show" : ""}`}
          >
            {sidebar.viewType === "projects" && <ProjectList />}
            {sidebar.viewType === "equipment" && <EquipmentList />}
          </div>
        </>
      )}
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  .sidebar__lists {
    padding-top: 0.5em;
  }
  @media (max-width: 720px) {
    .sidebar__lists:not(.always-show) {
      display: none;
    }
  }
`;
