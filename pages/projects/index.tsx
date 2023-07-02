import React from "react";
import { useProjects } from "../../components/projects/useProjects";
import styled from "styled-components";
import { ugcTheme } from "../../components/styled/theme";
import { Header } from "../../components/layout/Header";
import { ProjectPanel } from "../../components/projects/ProjectPanel";
import { ProjectCreatorPanel } from "../../components/projects/ProjectCreatorPanel";

export default function ProjectsPage() {
  const { data: projects } = useProjects();
  // RENDER
  return (
    <>
      <Header invert />
      <StyledProjectsPage>
        <div className="projects-list">
          {projects?.map((project) => (
            <ProjectPanel key={project.id} project={project} />
          ))}
        </div>
        <ProjectCreatorPanel />
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
  & > div.projects-list {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 2em auto;
    &:first-of-type {
      margin-top: 5em;
    }
    & > div {
      margin: 0.5em 0;
    }
  }
`;
