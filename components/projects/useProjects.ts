import { useMutation, useQuery } from "react-query";
import { TProject } from "./types";
import { supaClient } from "../query/supaClient";
import { queryClient } from "../query/queryClient";
import { omit } from "lodash";

// FETCHES
export const useProjects = () => {
  return useQuery<TProject[]>(
    ["projects"],
    async () =>
      supaClient
        .from("project")
        .select(
          `
          *,
          project_user (
            *,
            user (
              *
            )
          )
        `
        )
        .then((res) => res.data ?? []),
    { refetchInterval: 1000 * 15 }
  );
};

export const useProject = (projectId: number) => {
  return useQuery<TProject>(
    ["projects", projectId],
    async () =>
      supaClient
        .from("project")
        .select()
        .eq("id", projectId)
        .limit(1)
        .then((res) => res.data?.[0]),
    { refetchInterval: 1000 * 15 }
  );
};

// INSERT/UPDATE
export const useProjectUpsert = () => {
  return useMutation(
    async (project: Partial<TProject>) =>
      project.id
        ? supaClient
            .from("project")
            .update(omit(project, ["id"]))
            .eq("id", project.id)
            .select("*")
        : supaClient.from("project").insert(project).select("*"),
    {
      onSuccess: () => queryClient.invalidateQueries(["projects"]), // On success, just refetch data to ensure alls up-to-date
    }
  );
};

// USER RELATES/UNRELATES
export const useProjectUserRelate = () => {
  return useMutation(
    async ({
      project_id,
      user_id,
      role,
      relate,
    }: {
      project_id: number;
      user_id: number;
      role?: string;
      relate?: boolean;
    }) =>
      relate !== false
        ? supaClient
            .from("project_user")
            .insert({
              project_id,
              user_id,
              role,
            })
            .select()
        : supaClient
            .from("project_user")
            .delete()
            .eq("project_id", project_id)
            .eq("user_id", user_id)
            .select(),
    {
      onSuccess: () => queryClient.invalidateQueries(["projects"]), // On success, just refetch data to ensure alls up-to-date
    }
  );
};
