import { useMutation, useQuery } from "react-query";
import { TResource } from "./types";
import { supaClient } from "../query/supaClient";
import { queryClient } from "../query/queryClient";
import { omit } from "lodash";

// FETCHES
export const useResources = () => {
  return useQuery<TResource[]>(
    ["resources"],
    async () =>
      supaClient
        .from("resource")
        .select(`*`)
        .then((res) => res.data ?? []),
    { refetchInterval: 1000 * 15 }
  );
};
