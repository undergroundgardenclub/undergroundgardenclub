import { useQuery } from "react-query";
import { TEquipment } from "./types";
import { supaClient } from "../query/supaClient";

// FETCHES
export const useEquipments = () => {
  return useQuery<TEquipment[]>(
    ["equipments"],
    async () =>
      supaClient
        .from("equipment")
        .select(
          `
          *
        `
        )
        .then((res) => res.data ?? []),
    { refetchInterval: 1000 * 15 }
  );
};
