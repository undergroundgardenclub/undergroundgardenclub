import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-use";
import { useUser, useUserLogin, useUserLogout } from "./useUser";
import { StyledButton } from "../styled/StyledButton";
import { useStore } from "zustand";
import { modalStore } from "../layout/useModal";

export const SSOPanel: React.FC<{ headline?: string; redirectTo?: string }> = (
  props
) => {
  const location = useLocation();
  const modal = useStore(modalStore);
  const { data: user } = useUser();
  const { mutateAsync: login } = useUserLogin();
  const { mutateAsync: logout } = useUserLogout();
  const redirectTo = location.origin + (props.redirectTo ?? "/community");
  const [loginSuccess, setLoginSuccess] = useState<boolean>();

  // RENDER either logout/login
  return (
    <StyledSSOPanel>
      {user?.id ? (
        <StyledButton onClick={() => logout()}>Logout</StyledButton>
      ) : (
        <>
          <h3>{props.headline ?? "Join the Club"}</h3>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              // @ts-expect-error
              const email = e.target.email.value;
              if (email) {
                await login({ provider: "magicLink", email, redirectTo });
                setLoginSuccess(true);
              }
            }}
          >
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="your-email@company.com"
                disabled={loginSuccess === true}
              />
            </label>
            <StyledButton
              type="submit"
              variant="blue"
              disabled={loginSuccess === true}
            >
              Login with Email (Magic Link)
            </StyledButton>
            {loginSuccess === true && <p>Check your email for a link!</p>}
          </form>
          <div className="divider">
            <hr />
            <p>or</p>
            <hr />
          </div>
          {/* <StyledButton onClick={() => login({ provider: "apple", redirectTo })}>
            Login with Apple
          </StyledButton> */}
          <StyledButton
            variant="blue"
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
          <hr />
          <StyledButton onClick={() => modal.setIsOpen(false)}>
            Nevermind
          </StyledButton>
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
  h3 {
    font-weight: 900;
    border-bottom: 2px solid blue;
    padding-bottom: 8px;
    width: 100%;
  }
  button {
    margin: 0.5em 0;
    width: 100%;
  }
  form {
    margin: 1em 0;
    width: 100%;
    input {
      width: 100%;
    }
  }
  .divider {
    display: flex;
    align-items: center;
    width: 100%;
    p {
      font-size: 10px;
      margin: 0 0.5em;
      padding: 0;
    }
    hr {
      flex-grow: 1;
      width: 100%;
      opacity: 0.5;
    }
  }
`;
