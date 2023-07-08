import React, { useState } from "react";
import styled from "styled-components";
import { ProjectPanel } from "./ProjectPanel";
import { ResourcePanel } from "../resources/ResourcePanel";
import { useProjects } from "./useProjects";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ProjectCreatorButton } from "./ProjectCreatorButton";
import { useResources } from "../resources/useResources";

export const ProjectList = () => {
  const { data: projects } = useProjects();
  const { data: resources } = useResources();
  const [searchText, setSearchText] = useState("");
  // RENDER
  return (
    <StyledProjectList>
      <div className="project-search">
        <MagnifyingGlassIcon />
        <input
          value={searchText}
          placeholder="Search experiments, events, organizations"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="projects-divider">
        Experiments <hr />
      </div>
      <div className="projects-list">
        {projects
          ?.filter((p) =>
            searchText.length === 0
              ? true
              : Object.values(p).map(String).join(" ").includes(searchText)
          )
          ?.map((project) => (
            <ProjectPanel key={project.id} project={project} />
          ))}
        {/* <div className="project-add"><ProjectCreatorButton /></div> */}
      </div>
      <div className="projects-divider">
        Events <hr />
      </div>
      <div className="projects-list">
        {resources
          ?.filter((r) => r.type === "event")
          ?.filter((p) =>
            searchText.length === 0
              ? true
              : Object.values(p).map(String).join(" ").includes(searchText)
          )
          ?.map((resource) => (
            <ResourcePanel key={resource.id} resource={resource} />
          ))}
        {/* <div className="project-add"><ProjectCreatorButton /></div> */}
      </div>
      <div className="projects-divider">
        Organizations <hr />
      </div>
      <div className="projects-list">
        {resources
          ?.filter((r) => r.type === "organization")
          ?.filter((p) =>
            searchText.length === 0
              ? true
              : Object.values(p).map(String).join(" ").includes(searchText)
          )
          ?.map((resource) => (
            <ResourcePanel key={resource.id} resource={resource} />
          ))}
        {/* <div className="project-add"><ProjectCreatorButton /></div> */}
      </div>
    </StyledProjectList>
  );
};

const StyledProjectList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 36px;
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
  .projects-divider {
    display: flex;
    align-items: center;
    color: white;
    opacity: 0.3;
    font-size: 10px;
    margin: 4px 0;
    hr {
      flex-grow: 1;
      margin-left: 0.5em;
    }
  }
  .projects-list {
    & > * {
      margin-bottom: 0.5em;
    }
  }
  .project-add {
    margin-top: 1em;
  }
`;
