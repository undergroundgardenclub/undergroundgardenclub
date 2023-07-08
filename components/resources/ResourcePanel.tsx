import React from "react";
import { TResource } from "./types";
import styled from "styled-components";
import { ugcTheme } from "../styled/theme";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export const ResourcePanel: React.FC<{ resource: TResource }> = ({
  resource,
}) => {
  return (
    <StyledResourcePanel>
      <div className="resource-panel__details__view">
        <a
          className="resource_name"
          href={resource.url ?? ""}
          target="_blank"
          rel="noreferrer"
        >
          {resource.name}
          <ArrowRightIcon />
        </a>
        {resource.description ? (
          <span className="resource_description">{resource.description}</span>
        ) : null}
      </div>
    </StyledResourcePanel>
  );
};

const StyledResourcePanel = styled.div`
  background: ${ugcTheme.colors.blue[500]};
  color: white;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }

  .resource-panel__details__view {
    padding: 0.5em 1em;
    .resource_name {
      font-size: 16px;
      font-weight: 900;
      padding: 6px 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
    }
    .resource_description {
      margin-top: 6px;
      font-size: 11px;
    }
  }
`;
