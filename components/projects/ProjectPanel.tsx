import React, { useState } from "react";
import styled from "styled-components";
import { useUser } from "../users/useUser";
import { TProject } from "./types";
import { useProjectUserRelate } from "./useProjects";
import { StyledButton } from "../styled/StyledButton";
import { ugcTheme } from "../styled/theme";
import { ProjectEditorPanel } from "./ProjectEditorPanel";
import { useStore } from "zustand";
import { modalStore } from "../layout/useModal";
import {
  CalendarIcon,
  GlobeIcon,
  LockClosedIcon,
  TargetIcon,
} from "@radix-ui/react-icons";
import ReactMarkdown from "react-markdown";
import { SSOPanel } from "../users/SSOPanel";
import { orderBy } from "lodash";

export const ProjectPanel: React.FC<{ project: TProject }> = ({ project }) => {
  const modal = useStore(modalStore);
  const { data: user } = useUser();
  const { mutateAsync: relateProjectUser } = useProjectUserRelate();
  const [isNewInterest, setIsNewInterest] = useState(false);
  const isMember = project.project_user.some((pu) => pu.user_id === user?.id);
  const isLead = project.project_user.some(
    (pu) => pu.user_id === user?.id && pu.role === "lead"
  );

  // RENDER
  return (
    <StyledProjectPanel>
      <div className="project-panel__details__view">
        <p className="project_name">
          {project.status ? `${project.status}: ` : ""}
          {project.name}
        </p>
        <hr />
        <p className="project_description goal">
          <TargetIcon />{" "}
          <ReactMarkdown linkTarget="_blank">
            {project.goal ?? ""}
          </ReactMarkdown>
        </p>
        {project.prerequisites?.length > 0 ? (
          <p className="project_description">
            <LockClosedIcon />{" "}
            <ReactMarkdown linkTarget="_blank">
              {`Requirements: ${project.prerequisites}`}
            </ReactMarkdown>
          </p>
        ) : null}
        {project.onboarding_doc_url?.length > 0 ? (
          <p className="project_description">
            <ReactMarkdown linkTarget="_blank">
              {`Onboarding: ${project.onboarding_doc_url}`}
            </ReactMarkdown>
          </p>
        ) : null}
        <p className="project_description">
          <span>
            <CalendarIcon />{" "}
            <ReactMarkdown linkTarget="_blank">
              {project.meeting_schedule ?? ""}
            </ReactMarkdown>
          </span>
          <span>
            <GlobeIcon />{" "}
            <ReactMarkdown linkTarget="_blank">
              {project.meeting_location ?? ""}
            </ReactMarkdown>
          </span>
        </p>
        {isLead && (
          <div className="edit-button">
            <StyledButton
              variant="white"
              onClick={() =>
                modal.setIsOpen(
                  true,
                  <ProjectEditorPanel
                    project={project}
                    onCancel={() => modal.setIsOpen(false)}
                    onSave={() => modal.setIsOpen(false)}
                  />
                )
              }
            >
              Edit
            </StyledButton>
          </div>
        )}
      </div>
      {/* INTERESTS/MEMBERS */}
      <div className="project-panel__members">
        <div className="member-row">
          {project.project_user.map((pu) => (
            <span key={pu.user.avatar_url}>
              <img alt={pu.user.name} src={pu.user.avatar_url} />
            </span>
          ))}
          {project.num_members ? (
            <small>+ {project.num_members} more members</small>
          ) : null}
          {!isLead && (
            <StyledButton
              variant={isMember ? "green" : "transparent"}
              onClick={() => {
                // IF NOT LOGGED IN, PROMPT
                if (user?.id === undefined) {
                  modal.setIsOpen(
                    true,
                    <SSOPanel
                      headline={`Create an Account to Get Info About '${project.name}'`}
                      redirectTo="/projects"
                    />
                  );
                } else {
                  // ... ELSE LET EM GET INTERESTED/DISINTERESTED
                  relateProjectUser({
                    project_id: project.id,
                    user_id: user.id,
                    relate: !isMember,
                  });
                  // if becoming new member, flash the interest message
                  if (!isMember) {
                    setIsNewInterest(true);
                    setTimeout(() => setIsNewInterest(false), 8_000);
                  }
                }
              }}
            >
              I'm Interested!
            </StyledButton>
          )}
        </div>
        {!isLead && isMember && isNewInterest && (
          <div className="new-interest">
            <small>
              Interest received! The club/project lead will send you follow up
              details.
            </small>
          </div>
        )}
        {isLead && (
          <div className="member-email-list">
            <p>Roster</p>
            <ul>
              {orderBy(project.project_user, ["user.name"]).map((pu) => (
                <li key={pu.user.id}>
                  {pu.user.name} {pu.user.email ? `(${pu.user.email})` : ""}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </StyledProjectPanel>
  );
};

const StyledProjectPanel = styled.div`
  background: ${ugcTheme.colors.blue[500]};
  color: white;
  padding: 1em;
  .project-panel__details__view {
    .project_name {
      font-size: 16px;
      font-weight: 900;
    }
    .project_description {
      display: flex;
      line-height: 125%;
      span {
        flex-grow: 1;
        width: 50%;
        display: flex;
        align-items: center;
      }
      svg {
        height: 14px;
        width: 14px;
        margin-right: 4px;
      }
      &.goal {
        svg {
          height: 22px;
          width: 22px;
        }
      }
    }
    .edit-button {
      margin-top: 0.5em;
      width: 100%;
      button {
        width: 100%;
      }
    }
    & > p {
      padding: 4px 0;
      font-size: 12px;
    }
    & > button {
      width: 100%;
    }
  }
  .project-panel__members {
    border-top: 2px solid ${ugcTheme.colors.white[500]};
    padding-top: 0.5em;
    margin-top: 0.5em;
    & > div.member-row {
      display: flex;
      align-items: center;
      max-height: 40px;
      margin: 4px 0 0;
      span {
        height: 28px;
        width: auto;
        img {
          height: 28px;
          // transform: skew(5deg);
        }
      }
      small {
        margin-left: 8px;
      }
      button {
        margin-left: auto;
      }
    }
    .new-interest {
      margin-top: 0.5em;
      text-align: center;
      & > small {
        padding: 0.5em 0;
        font-size: 10px;
        margin: 0 auto;
      }
    }
    .member-email-list {
      margin-top: 0.5em;
      & > p {
        padding: 0.5em 0;
        text-decoration: underline;
      }
    }
  }
`;
