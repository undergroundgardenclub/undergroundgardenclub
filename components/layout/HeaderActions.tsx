import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { ugcTheme } from "../styled/theme";
import { useUser } from "../users/useUser";
import { ProfilePanel } from "../users/ProfilePanel";
import { useStore } from "zustand";
import { modalStore } from "./useModal";
import { StyledButtonAvatar } from "../styled/StyledButton";
import { LogoSkewer } from "./LogoSkewer";
import { ProjectCreatorButton } from "../projects/ProjectCreatorButton";
import { PersonIcon } from "@radix-ui/react-icons";

export const HeaderActions: React.FC<{ hide?: string[]; invert?: boolean }> = (
  props
) => {
  const modal = useStore(modalStore);
  const { data: user } = useUser();
  // RENDER
  return (
    <StyledHeaderActions invert={props.invert}>
      {/* {props.hide?.includes("logo") === false && (
        <div className="header__logo">
          <LogoSkewer />
        </div>
      )} */}
      <div className="header__inspo">
        <Marquee autoFill>
          <div>WE GROW TOGETHER&ensp;</div>
        </Marquee>
        {/* <div>JUST KEEP GROWING&ensp;</div>
        <div>FUCK AROUND&ensp;BUILD SHIT&ensp;</div>
        <div>JUST GROW IT&ensp;</div> */}
      </div>
      <div className="header__actions">
        {/* <Link href="/" passHref>
          <StyledButton variant={props.invert ? "green" : "blue"}>
            BIO-QUESTS
          </StyledButton>
        </Link> */}
        {/* <ProjectCreatorButton /> */}
        {/* <Link href="/community" passHref>
          <StyledButton variant={props.invert ? "green" : "blue"}>
          COMMUNITY
          </StyledButton>
        </Link> */}
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
      @media (max-width: 45em) {
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
    border-left: 2px solid;
    border-right: 2px solid;
    border-color: ${ugcTheme.colors.green[500]};
    align-items: center;
    display: flex;
    padding-top: 0.25em;
  }
  .header__actions {
    flex-grow: 1;
    display: flex;
    gap: 4px;
    white-space: nowrap;
    @media (max-width: 45em) {
      justify-content: right;
    }
  }
`;
