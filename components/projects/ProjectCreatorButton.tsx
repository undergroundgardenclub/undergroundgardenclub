import React from "react";
import { useStore } from "zustand";
import { modalStore } from "../layout/useModal";
import { SSOPanel } from "../users/SSOPanel";
import { useUser } from "../users/useUser";
import { StyledButton } from "../styled/StyledButton";
import { ProjectEditorPanel } from "./ProjectEditorPanel";
import { useLocation } from "react-use";

export const ProjectCreatorButton: React.FC = () => {
  const location = useLocation();
  const modal = useStore(modalStore);
  const { data: user } = useUser();
  // RENDER
  return (
    <StyledButton
      variant="green"
      style={{ width: "100%" }}
      onClick={async (e) => {
        e.preventDefault();
        // IF NO USER, SIGN UP
        if (user?.id === undefined) {
          modal.setIsOpen(
            true,
            <SSOPanel
              headline="Create an Account to Start a Project"
              redirectTo={location.pathname}
            />
          );
        } else {
          // IF USER, PROMPT PROJECT CREAT
          modal.setIsOpen(
            true,
            <ProjectEditorPanel
              project={{}}
              onCancel={() => modal.setIsOpen(false)}
              onSave={() => modal.setIsOpen(false)}
            />
          );
        }
      }}
    >
      + Add Idea or Project
    </StyledButton>
  );
};
