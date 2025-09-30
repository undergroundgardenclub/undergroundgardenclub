import { useMutation, useQuery } from "@tanstack/react-query";
import { TResource } from "./types";
// import { supaClient } from "../query/supaClient";
import { queryClient } from "../query/queryClient";
import { omit } from "lodash";

// DATA (ditching external database)
const localResources: TResource[] = [
  {
    type: "event",
    name: "New Moon Mycology Summit",
    url: "https://www.themyceliumunderground.com/nmms",
    description: "Aug. 9-13, 2023 @ Wheelock, VT",
  },
  {
    type: "event",
    name: "Open Hardware Summit (Annual)",
    url: "https://2023.oshwa.org/",
    description: "Apr. 28-29, 2023 @ New York City, NY",
  },
  {
    type: "organization",
    name: "Sovereign Science",
    url: "https://www.instagram.com/sovereign.science/",
    description: "",
  },
  {
    type: "organization",
    name: "Homeworld Collective",
    url: "https://homeworld.bio/",
    description: "",
  },
  {
    type: "organization",
    name: "Black Girl Environmentalist",
    url: "https://blackgirlenvironmentalist.org/",
    description: "",
  },
  {
    type: "organization",
    name: "Estrofem Lab",
    url: "https://maggic.ooo/Estrofem-Lab-1",
    description: "",
  },
  {
    type: "organization",
    name: "Fungi For the People",
    url: "https://fungiforthepeople.org/",
    description: "",
  },
  {
    type: "organization",
    name: "Experiment.com",
    url: "experiment.com",
    description: "Small Experiment Grant/Funding",
  },
];

// FETCHES
export const useResources = () => {
  return useQuery<TResource[]>({
    queryKey: ["resources"],
    queryFn: () => localResources,
    refetchInterval: 1000 * 15,
  });
};
