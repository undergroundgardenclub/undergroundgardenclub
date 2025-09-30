import { useMutation, useQuery } from "react-query";
import { TProject } from "./types";
import { supaClient } from "../query/supaClient";
import { queryClient } from "../query/queryClient";
import { omit } from "lodash";

// DATA (forget dynamic db/etc.)
const localProjects: TProject[] = [
  {
    name: "Barcoding the Harbor",
    goal: "Understanding what calls the Inner Harbor home is an important step in making the Harbor a better place for everybody. We can get a deeper sense of the Inner Harbor’s health over time by sampling and analyzing it at regular intervals. we use the microscope and advanced DNA analysis to identify what organisms are present. We can use this data to find ways to affect positive changes on the Harbor and use this natural resource in sustainable ways.We want to know if the community of aquatic animals varies in locations with different watersheds and shorelines, such as areas of suburban runoff, industrial legacy pollutants, or restoration activities. The project is therefore expanding and sampling 6 sites around the Chesapeake Bay.",
    meeting_schedule: "TBD",
    meeting_location:
      "[Baltimore Under Ground](https://bugssonline.org/group-projects/barcoding-the-harbor/) (Baltimore, MD)",
    status: "active",
    num_members: 8,
    project_user: [],
  },
  {
    name: "Real Vegan Cheese",
    goal: "make real cheese without using any animals!\nReal Vegan Cheese is a not a cheese substitute! It all starts with regular old baker's yeast. Through synthetic biology, we engineer our yeast to become milk-protein factories. Our milk proteins are then combined with water and vegan oil to make Vegan Milk which is ultimately converted into Real Vegan Cheese through standard cheese-making processes - just like cheese made from cow or goat milk! In principle, we can make cheese from any animal for which we have a genome sequence - even something as strange as Narwhal whales.",
    meeting_schedule: "Every Monday, 7PM PST",
    meeting_location:
      "[Counter Culture Labs](https://www.counterculturelabs.org/projects.html) (Oakland, CA)",
    status: "",
    num_members: 7,
    project_user: [],
  },
  {
    name: "Open Plant: Plant Produced Insulin",
    goal: "Genspace's Contribution to an international consortium of research on the Open Plant Project to use liverwort M. polymorpha to generate complex proteins. M. polymorpha has traits that make it ideal for bioengineering. Its small size and fast lifecycle, allows experiments to be carried out quickly and easily. As group members learn to work with this plant, we will begin building novel circuits and expressing interesting proteins such as antibodies, cytochromes, and inteins.",
    meeting_schedule: "Every Saturday, 11am EST",
    meeting_location: "[Genspace](https://genspace.org) (NYC, NY) + REMOTE",
    status: "active",
    num_members: 8,
    project_user: [],
  },
  {
    name: "ENGINEERED MATTER: SYNTHETIC SPIDER SILK ",
    goal: "developinG functional materials for a sustainable world. Spider silk has been the holy grail for scientists for decades considering its role as a high-performance material. With exposure to machine learning, biochemistry, synthetic biology lab work and business analysis, members begin to deeply understand the challenges behind protein expression and translating research to potential business applications.",
    meeting_schedule: "Every Sunday, 11am EST",
    meeting_location: "[Genspace](https://genspace.org) (NYC, NY)",
    status: "active",
    num_members: 5,
    project_user: [],
  },
  {
    name: "Micromitigation Initiative",
    goal: "Micromitigation is a citizen science initiative which uses small screened panels of commodity granulated activated carbon. These panels are placed in polluted locations in order to mitigate ambient VOC aerosols. After pollutants are adsorbed, the panels are desorbed (thermally or using microwaves), the contaminants incinerated, and the material is reactivated.",
    meeting_schedule: "Every Thursday, 7PM PST",
    meeting_location:
      "[Counter Culture Labs](https://www.counterculturelabs.org/) (Oakland, CA)",
    status: "active",
    num_members: 4,
    project_user: [],
  },
];

// FETCHES
export const useProjects = () => {
  return useQuery<TProject[]>(["projects"], () => localProjects, {
    refetchInterval: 1000 * 15,
  });
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
