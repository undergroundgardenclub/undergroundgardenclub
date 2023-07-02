import React from "react";
import styled from "styled-components";
import { useUser, useUserLogout } from "./useUser";
import { modalStore } from "../layout/useModal";
import { useStore } from "zustand";
import { StyledButton } from "../styled/StyledButton";

export const ProfilePanel: React.FC = () => {
  const modal = useStore(modalStore);
  const { mutateAsync: logout } = useUserLogout();

  // RENDER either logout/login
  return (
    <StyledProfilePanel>
      <StyledButton
        onClick={() => {
          logout();
          modal.setIsOpen(false);
        }}
      >
        Logout
      </StyledButton>
    </StyledProfilePanel>
  );
};

const StyledProfilePanel = styled.div`
  display: flex;
  flex-direction: column;
`;
