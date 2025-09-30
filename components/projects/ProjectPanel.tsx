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
import { orderBy } from "lodash";
import {
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  GlobeIcon,
  LockClosedIcon,
  TargetIcon,
} from "@radix-ui/react-icons";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-use";
import { SSOPanel } from "../users/SSOPanel";

export const ProjectPanel: React.FC<{ project: TProject }> = ({ project }) => {
  const location = useLocation();
  const modal = useStore(modalStore);
  const { data: user } = useUser();
  const { mutateAsync: relateProjectUser } = useProjectUserRelate();
  const [showDetails, setShowDetails] = useState(false);
  const [isNewInterest, setIsNewInterest] = useState(false);
  const isMember = project.project_user.some((pu) => pu.user_id === user?.id);
  const isLead = project.project_user.some(
    (pu) => pu.user_id === user?.id && pu.role === "lead"
  );

  // RENDER
  return (
    <StyledProjectPanel>
      {/* {project.status ? (
        <div className="project-panel__status">
          {project.status === "idea" ? "Idea: Looking for Interest" : null}
          {project.status === "active" ? "Active: Join Project" : null}
        </div>
      ) : null} */}
      <div className="project-panel__details__view">
        <p
          className="project_name"
          onClick={() => setShowDetails(!showDetails)}
        >
          <span>{project.name}</span>
          {showDetails ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </p>
        {showDetails ? (
          <>
            <p className="project_description goal">
              <TargetIcon />{" "}
              <ReactMarkdown linkTarget="_blank">
                {project.goal ?? ""}
              </ReactMarkdown>
            </p>
            {/* {project.prerequisites?.length > 0 ? (
              <p className="project_description">
                <LockClosedIcon />{" "}
                <ReactMarkdown linkTarget="_blank">
                  {`Requirements: ${project.prerequisites}`}
                </ReactMarkdown>
              </p>
            ) : null} */}
            {project?.onboarding_doc_url?.length > 0 ? (
              <ReactMarkdown
                linkTarget="_blank"
                className="project_description"
              >
                {`Onboarding: ${project.onboarding_doc_url}`}
              </ReactMarkdown>
            ) : null}
            {/* <p className="project_description">
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
            </p> */}
            <p className="project_description">
              <span>
                <CalendarIcon />{" "}
                <ReactMarkdown linkTarget="_blank">
                  {project.meeting_schedule ?? ""}
                </ReactMarkdown>
              </span>
            </p>
            <p className="project_description">
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
          </>
        ) : (
          <>
            <p className="project_description">
              <span>
                <GlobeIcon />{" "}
                <ReactMarkdown linkTarget="_blank">
                  {project.meeting_location ?? ""}
                </ReactMarkdown>
              </span>
            </p>
          </>
        )}
      </div>
      {/* INTERESTS/MEMBERS */}
      {/* {showDetails && (
        <div className="project-panel__members">
          {!isLead && (
            <div className="member-row">
              {project.project_user
                ?.filter((pu) => pu.user.avatar_url != null)
                ?.map((pu) => (
                  <span key={pu.user.avatar_url}>
                    <img alt={pu.user.name} src={pu.user.avatar_url} />
                  </span>
                ))}
              {project.num_members ? (
                <small>+ {project.num_members} more members</small>
              ) : null}
              {!isLead && (
                <StyledButton
                  variant={isMember ? "green" : "white"}
                  onClick={() => {
                    // IF NOT LOGGED IN, PROMPT
                    if (user?.id === undefined) {
                      modal.setIsOpen(
                        true,
                        <SSOPanel
                          headline={`Create an Account to Get Info About '${project.name}'`}
                          redirectTo={location.pathname}
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
                        setTimeout(() => setIsNewInterest(false), 5_000);
                      }
                    }
                  }}
                >
                  {isMember ? "✓ Joined" : "Join"}
                </StyledButton>
              )}
            </div>
          )}
          {!isLead && isMember && isNewInterest && (
            <div className="new-interest">
              <small>
                Interest received! The club/project lead will send more info.
              </small>
            </div>
          )}
          {isLead && (
            <div className="member-email-list">
              <p>Roster</p>
              <ul>
                {orderBy(project.project_user, ["user.name"]).map((pu) => (
                  <li key={pu.user.id}>
                    {pu.user.name ?? "n/a"}{" "}
                    {pu.user.email ? `(${pu.user.email})` : "(n/a)"}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )} */}
    </StyledProjectPanel>
  );
};

const StyledProjectPanel = styled.div`
  background: ${ugcTheme.colors.blue[500]};
  color: white;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }

  .project-panel__status {
    // background: ${ugcTheme.colors.green[500]};
    // color: ${ugcTheme.colors.blue[500]};
    background: #0000aa;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 900;
    text-align: left;
    padding: 0.75em 1.25em 0.5em;
    font-size: 10px;
  }
  .project-panel__details__view {
    padding: 0.5em 1em;
    .project_name {
      font-size: 16px;
      font-weight: 900;
      border-bottom: 2px solid ${ugcTheme.colors.blue[100]};
      margin-bottom: 6px;
      padding-bottom: 6px;
      padding-top: 6px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
    }
    .project_description {
      display: flex;
      line-height: 125%;
      font-size: 11px;
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
          min-width: 15px;
          width: 15px;
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
    padding: 0.25em 1em 0.5em;
    & > div.member-row {
      display: flex;
      align-items: center;
      // max-height: 40px;
      border-top: 2px solid ${ugcTheme.colors.blue[100]};
      margin: 4px 0;
      padding-top: 12px;
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
      border-top: 2px solid ${ugcTheme.colors.blue[100]};
      margin: 4px 0;
      padding-top: 12px;
      & > p {
        &:first-of-type {
          padding-bottom: 0.5em;
        }
        text-decoration: underline;
      }
    }
  }
`;
