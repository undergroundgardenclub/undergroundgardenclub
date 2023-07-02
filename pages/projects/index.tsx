import React from "react";
import styled from "styled-components";
import { ugcTheme } from "../../components/styled/theme";
import { HeaderActions } from "../../components/layout/HeaderActions";
import { ProjectCreatorButton } from "../../components/projects/ProjectCreatorButton";
import { ProjectList } from "../../components/projects/ProjectList";

export default function ProjectsPage() {
  // RENDER
  return (
    <>
      <StyledProjectsPage>
        <HeaderActions invert />
        <div className="projects">
          <ProjectList />
        </div>
      </StyledProjectsPage>
    </>
  );
}

const StyledProjectsPage = styled.div`
  background: ${ugcTheme.colors.blue[100]};
  width: 100%;
  max-width: 100vw;
  min-width: 100vw;
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  & > * {
    max-width: 600px;
    margin: 0 auto 1em;
  }
  & > .projects {
    padding: 0.5em;
  }
`;
