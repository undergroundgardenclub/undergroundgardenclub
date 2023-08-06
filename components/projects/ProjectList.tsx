import React, { useState } from "react";
import styled from "styled-components";
import { ProjectPanel } from "./ProjectPanel";
import { ResourcePanel } from "../resources/ResourcePanel";
import { useProjects } from "./useProjects";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ProjectCreatorButton } from "./ProjectCreatorButton";
import { useResources } from "../resources/useResources";
import { orderBy } from "lodash";
import { StyledResourceList } from "../resources/ResourceList";

export const ProjectList = () => {
  const { data: projects } = useProjects();
  const { data: resources } = useResources();
  const [searchText, setSearchText] = useState("");
  // RENDER
  return (
    <StyledResourceList>
      <div className="resource-list__search">
        <MagnifyingGlassIcon />
        <input
          value={searchText}
          placeholder="Search experiments, events, organizations"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="resource-list__divider">
        Experiments <hr />
      </div>
      <div className="resource-list__list">
        {projects
          ?.filter((p) =>
            searchText.length === 0
              ? true
              : Object.values(p).map(String).join(" ").includes(searchText)
          )
          ?.map((project) => (
            <ProjectPanel key={project.id} project={project} />
          ))}
        {/* <div className="resource-list__add-btn"><ProjectCreatorButton /></div> */}
      </div>
      <div className="resource-list__divider">
        Events <hr />
      </div>
      <div className="resource-list__list">
        {orderBy(resources, ["name"])
          ?.filter((r) => r.type === "event")
          ?.filter((p) =>
            searchText.length === 0
              ? true
              : Object.values(p).map(String).join(" ").includes(searchText)
          )
          ?.map((resource) => (
            <ResourcePanel key={resource.id} resource={resource} />
          ))}
        {/* <div className="resource-list__add-btn"><ProjectCreatorButton /></div> */}
      </div>
      <div className="resource-list__divider">
        Organizations <hr />
      </div>
      <div className="resource-list__list">
        {orderBy(resources, ["name"])
          ?.filter((r) => r.type === "organization")
          ?.filter((p) =>
            searchText.length === 0
              ? true
              : Object.values(p)
                  .map(String)
                  .join(" ")
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
          )
          ?.map((resource) => (
            <ResourcePanel key={resource.id} resource={resource} />
          ))}
        {/* <div className="resource-list__add-btn"><ProjectCreatorButton /></div> */}
      </div>
    </StyledResourceList>
  );
};
