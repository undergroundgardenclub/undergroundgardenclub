import { TUser } from "../users/types";

export type TProjectUser = {
  id: number;
  project_id: number;
  user_id: number;
  role?: string;
  user: TUser;
};

export type TProject = {
  id: number;
  name: string;
  slug: string;
  lead_user_id: string; // uuid from user
  goal?: string;
  meeting_schedule?: string;
  meeting_location?: string;
  tags?: string[];
  prerequisites?: string;
  status?: string;
  project_user: TProjectUser[];
  onboarding_doc_url?: string;
  num_members?: number;
};
