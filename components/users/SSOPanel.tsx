import React from "react";
import styled from "styled-components";
import { useLocation } from "react-use";
import { useUser, useUserLogin, useUserLogout } from "./useUser";
import { StyledButton } from "../styled/StyledButton";

export const SSOPanel: React.FC<{ headline?: string; redirectTo?: string }> = (
  props
) => {
  const location = useLocation();
  const { data: user } = useUser();
  const { mutateAsync: login } = useUserLogin();
  const { mutateAsync: logout } = useUserLogout();
  const redirectTo = location.origin + (props.redirectTo ?? "/projects");

  // RENDER either logout/login
  return (
    <StyledSSOPanel>
      {user?.id ? (
        <StyledButton onClick={() => logout()}>Logout</StyledButton>
      ) : (
        <>
          <h3>{props.headline ?? "Join the Club"}</h3>
          <hr />
          {/* <button onClick={() => login({ provider: "apple", redirectTo })}>
            Login with Apple
          </button> */}
          <StyledButton
            onClick={() => login({ provider: "google", redirectTo })}
          >
            Login with Google
          </StyledButton>
          {/* <button onClick={() => login({ provider: "microsoft", redirectTo })}>
            Login with Microsoft
          </button> */}
          {/* <button onClick={() => login({ provider: "twitter", redirectTo })}>
            Login with Twitter
          </button> */}
        </>
      )}
    </StyledSSOPanel>
  );
};

const StyledSSOPanel = styled.div`
  display: flex;
  flex-direction: column;
`;
