import React from "react";
import { StyledButton } from "../styled/StyledButton";
import { TProject } from "./types";
import { useProjectUpsert, useProjectUserRelate } from "./useProjects";
import styled from "styled-components";
import { useUser } from "../users/useUser";
import { kebabCase } from "lodash";

export const ProjectEditorPanel: React.FC<{
  project: Partial<TProject>;
  onCancel: Function;
  onSave: Function;
}> = ({ project, onCancel, onSave }) => {
  const { mutateAsync: upsertProject } = useProjectUpsert();
  const { mutateAsync: relateProjectUser } = useProjectUserRelate();
  const { data: user } = useUser();

  // RENDER
  return (
    <StyledProjectEditorPanel
      onSubmit={async (e) => {
        e.preventDefault();
        // validate
        // --- user exists/logged in (so we can associate lead)
        if (!user?.id) throw new Error("User not logged in");
        // upsert
        // --- project
        const { data: projectData, error } = await upsertProject({
          id: project.id,
          name: e.target.name.value,
          slug: project.slug ?? kebabCase(e.target.name.value), // only set initially so seo page doesnt change
          goal: e.target.goal.value,
          status: e.target.status.value,
          meeting_schedule: e.target.meeting_schedule.value,
          meeting_location: e.target.meeting_location.value,
          prerequisites: e.target.prerequisites.value,
          onboarding_doc_url: e.target.onboarding_doc_url.value,
          num_members: e.target.num_members.value,
        });
        if (error) throw error;
        // --- set project lead if none exists (HACK: no id?)
        if (project.id === undefined) {
          const { data: userData } = await relateProjectUser({
            project_id: projectData[0].id,
            user_id: user.id,
            role: "lead",
          });
        }
        // save/close
        onSave?.();
      }}
    >
      <label>
        <span>Name:</span>
        <input name="name" defaultValue={project.name} />
      </label>
      <label>
        <span>Goal:</span>
        <textarea name="goal" rows={5} defaultValue={project.goal}></textarea>
      </label>
      <label>
        <span>Status:</span>
        <select name="status" defaultValue={project.status}>
          <option value="">--- status ---</option>
          <option value="idea">Idea (Gauging Interest)</option>
          <option value="active">Active (Come Join!)</option>
          <option value="done">Done (Mission Accomplished)</option>
        </select>
      </label>
      <label>
        <span>Recurring Schedule:</span>
        <input
          name="meeting_schedule"
          defaultValue={project.meeting_schedule}
        />
      </label>
      <label>
        <span>Meeting Location:</span>
        <input
          name="meeting_location"
          defaultValue={project.meeting_location}
        />
      </label>
      <label>
        <span>Prerequisites:</span>
        <input name="prerequisites" defaultValue={project.prerequisites} />
      </label>
      <label>
        <span>Onboarding Doc URL:</span>
        <input
          name="onboarding_doc_url"
          defaultValue={project.onboarding_doc_url}
        />
      </label>
      <label>
        <span>Number of Members:</span>
        <input
          name="num_members"
          type="number"
          defaultValue={project.num_members}
        />
      </label>
      <hr />
      <div className="project-panel__details__editor__buttons">
        <StyledButton type="button" onClick={() => onCancel?.()}>
          Cancel
        </StyledButton>
        <StyledButton type="submit">Save</StyledButton>
      </div>
    </StyledProjectEditorPanel>
  );
};

const StyledProjectEditorPanel = styled.form`
  width: 100%;
  min-width: 640px;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  background: white;
  label {
    display: flex;
    & > span {
      min-width: 150px;
      margin-top: 2px;
    }
    input,
    select,
    textarea {
      flex-grow: 1;
    }
  }
  padding: 1.25em;
  .project-panel__details__editor__buttons {
    display: flex;
    justify-content: space-between;
  }
`;
