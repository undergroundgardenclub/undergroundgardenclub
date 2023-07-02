import React, { useState } from "react";
import styled from "styled-components";
import { ProjectPanel } from "./ProjectPanel";
import { useProjects } from "./useProjects";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ProjectCreatorButton } from "./ProjectCreatorButton";

export const ProjectList = () => {
  const { data: projects } = useProjects();
  const [searchText, setSearchText] = useState("");
  // RENDER
  return (
    <StyledProjectList>
      <div className="project-search">
        <MagnifyingGlassIcon />
        <input
          value={searchText}
          placeholder="Search for projects and groups"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="projects-list">
        {projects
          ?.filter((p) => {
            if (searchText.length === 0) return true;
            // Crude text search on text values of project
            return Object.values(p).map(String).join(" ").includes(searchText);
          })
          ?.map((project) => (
            <ProjectPanel key={project.id} project={project} />
          ))}
      </div>
      {/* <div className="project-add">
        <ProjectCreatorButton />
      </div> */}
    </StyledProjectList>
  );
};

const StyledProjectList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  height: 100%;
  overflow-y: scroll;
  .project-search {
    display: flex;
    align-items: center;
    margin: 0.25em 0 0.75em;
    svg {
      path {
        fill: white;
      }
    }
    input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      color: white;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      font-size: 12px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
  .projects-list {
    padding-bottom: 3em;
    & > * {
      margin-bottom: 0.5em;
    }
  }
  .project-add {
    margin-top: 1em;
  }
`;
