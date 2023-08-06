import React from "react";
import styled from "styled-components";
import { PersonIcon } from "@radix-ui/react-icons";
import Marquee from "react-fast-marquee";
import { useRouter } from "next/router";
import { useStore } from "zustand";
import { ugcTheme } from "../styled/theme";
import { useUser } from "../users/useUser";
import { ProfilePanel } from "../users/ProfilePanel";
import { modalStore } from "./useModal";
import { StyledButton, StyledButtonAvatar } from "../styled/StyledButton";
import { LogoSkewer } from "./LogoSkewer";
import { ProjectCreatorButton } from "../projects/ProjectCreatorButton";
import { sidebarStore } from "./useSidebar";
import { mobileBreakpoint } from "./useBreakpoints";

// COMPONENT
export const HeaderActions: React.FC<{ hide?: string[]; invert?: boolean }> = (
  props
) => {
  const router = useRouter();
  const modal = useStore(modalStore);
  const sidebar = useStore(sidebarStore);
  const { data: user } = useUser();
  const breakpoint = mobileBreakpoint();
  const isMobile = breakpoint === "mobile";
  const isQuesting = router.pathname === "/";

  // RENDER
  return (
    <StyledHeaderActions>
      <div className="header__inspo">
        <StyledButton
          variant={
            sidebar.viewType === "projects" && (!isMobile || !isQuesting)
              ? "green"
              : "blue"
          }
          onClick={() => {
            sidebar.setViewType("projects");
            // if questing and on mobile go to community route for full view
            if (isQuesting && isMobile) router.push("/community");
          }}
        >
          FIND YOUR PEOPLE
        </StyledButton>
        <StyledButton
          variant={
            sidebar.viewType === "equipment" && (!isMobile || !isQuesting)
              ? "green"
              : "blue"
          }
          onClick={() => {
            sidebar.setViewType("equipment");
            // if questing and on mobile go to community route for full view
            if (isQuesting && isMobile) router.push("/community");
          }}
        >
          BUILD YOUR LAB
        </StyledButton>
      </div>
      <div className="header__actions">
        {user?.id && (
          <StyledButtonAvatar
            variant={props.invert ? "green" : "blue"}
            onClick={() => modal.setIsOpen(true, <ProfilePanel />)}
          >
            {user.avatar_url ? (
              <img alt="profile" src={user.avatar_url} />
            ) : (
              <PersonIcon />
            )}
          </StyledButtonAvatar>
        )}
      </div>
      {/* TODO: music player */}
    </StyledHeaderActions>
  );
};

const StyledHeaderActions = styled.header<{ invert?: boolean }>`
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  .header__logo {
    // transform: rotate(180deg);
    svg {
      mix-blend-mode: difference;
      path {
        fill: ${(props) =>
          props.invert
            ? ugcTheme.colors.green[500]
            : ugcTheme.colors.blue[500]};
      }
    }
    &,
    svg {
      height: 32px; // 32px
      @media (max-width: 720px) {
        height: 32px;
      }
    }
  }
  .header__inspo {
    flex-grow: 1;
    color: blue;
    font-family: ${ugcTheme.fonts.display};
    color: ${(props) =>
      props.invert ? ugcTheme.colors.green[500] : ugcTheme.colors.blue[500]};
    font-size: 24px;
    overflow: hidden;
    width: 100%;
    // padding-top: 0.25em;
    // border-left: 2px solid;
    // border-right: 2px solid;
    // border-color: ${ugcTheme.colors.green[500]};
    align-items: center;
    display: flex;
    & > button {
      flex: 1;
      margin: 0 0.25em;
      font-size: 18px;
      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
      @media (max-width: 720px) {
        font-size: 15px;
      }
    }
  }
  .header__actions {
    flex-grow: 1;
    display: flex;
    white-space: nowrap;
    & > button {
      margin-left: 0.5em;
    }
    @media (max-width: 720px) {
      justify-content: right;
    }
  }
`;
