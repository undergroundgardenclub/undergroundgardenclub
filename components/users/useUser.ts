import { useMutation, useQuery } from "@tanstack/react-query";
import { TUser } from "./types";
// import { supaClient } from "../query/supaClient";
import { queryClient } from "../query/queryClient";

// FETCHES
export const useUser = () => {
  return useQuery<TUser | null>({
    queryKey: ["user"],
    queryFn: async () => {
      // // fetch authed
      // const { data: authedUser } = await supaClient.auth.getUser();
      // if (!authedUser?.user) return null;

      // // fetch profile
      // const { data: profileUser } = await supaClient
      //   .from("user")
      //   .select()
      //   .eq("auth_user_id", authedUser.user.id);

      // // HACK: if no profile, create one (wrorried about duplication but w/e for now)
      // if (profileUser?.length === 0) {
      //   const { data: newProfileUser } = await supaClient
      //     .from("user")
      //     .insert({
      //       auth_user_id: authedUser.user.id,
      //       name: authedUser.user?.user_metadata?.name,
      //       email:
      //         authedUser.user?.user_metadata?.email ?? authedUser.user?.email,
      //       avatar_url: authedUser.user?.user_metadata?.avatar_url,
      //     })
      //     .select();
      //   return newProfileUser?.[0];
      // }

      // // return
      // return profileUser?.[0];
      return null;
    },
  });
};

// UPDATES

// AUTH
export const useUserLogin = () => {
  return useMutation({
    mutationFn: async ({
      provider,
      redirectTo,
      email,
    }: any): Promise<TUser> => {
      // // IF MAGIC LINK (https://supabase.com/docs/guides/auth/auth-magic-link)
      // if (provider === "magicLink") {
      //   const { data, error }: any = await supaClient.auth.signInWithOtp({
      //     email,
      //     options: { emailRedirectTo: redirectTo },
      //   });
      //   if (error) throw error;
      //   return data;
      // } else {
      //   // IF SOCIAL (https://supabase.com/docs/guides/auth/social-login)
      //   const { data, error }: any = await supaClient.auth.signInWithOAuth({
      //     provider,
      //     options: { redirectTo },
      //   });
      //   if (error) throw error;
      //   return data;
      // }
      return null;
    },
    onSettled: async () => queryClient.resetQueries({ queryKey: ["user"] }),
  });
};

export const useUserLogout = () => {
  return useMutation({
    mutationFn: async () => null, // await supaClient.auth.signOut(),
    onSettled: async () => queryClient.resetQueries({ queryKey: ["user"] }),
  });
};
