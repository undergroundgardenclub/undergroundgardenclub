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
          {/* <StyledButton onClick={() => login({ provider: "apple", redirectTo })}>
            Login with Apple
          </StyledButton> */}
          <StyledButton
            onClick={() => login({ provider: "google", redirectTo })}
          >
            Login with Google
          </StyledButton>
          {/* <StyledButton onClick={() => login({ provider: "microsoft", redirectTo })}>
            Login with Microsoft
          </StyledButton> */}
          {/* <StyledButton
            onClick={() => login({ provider: "twitter", redirectTo })}
          >
            Login with Twitter
          </StyledButton> */}
        </>
      )}
    </StyledSSOPanel>
  );
};

const StyledSSOPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1em;
  button {
    margin: 0.5em 0;
    width: 100%;
  }
`;
