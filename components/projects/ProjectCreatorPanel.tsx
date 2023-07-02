import React from "react";
import { useStore } from "zustand";
import { modalStore } from "../layout/useModal";
import { SSOPanel } from "../users/SSOPanel";
import { useUser } from "../users/useUser";
import { StyledButton } from "../styled/StyledButton";
import styled from "styled-components";
import { ProjectEditorPanel } from "./ProjectEditorPanel";

export const ProjectCreatorPanel: React.FC = () => {
  const modal = useStore(modalStore);
  const { data: user } = useUser();

  // RENDER
  return (
    <StyledProjectCreatorPanel>
      <StyledButton
        variant="green"
        onClick={async (e) => {
          e.preventDefault();
          // IF NO USER, SIGN UP
          if (user?.id === undefined) {
            modal.setIsOpen(
              true,
              <SSOPanel
                headline="Create an Account to Start a Project"
                redirectTo="/projects"
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
        + Add Project / Club
      </StyledButton>
    </StyledProjectCreatorPanel>
  );
};

const StyledProjectCreatorPanel = styled.div`
  margin: 0 auto;
  max-width: 600px;
  button {
    width: 100%;
  }
`;
