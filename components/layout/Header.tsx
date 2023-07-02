import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Flower } from "../styled/Flower";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { ugcTheme } from "../styled/theme";
import { useUser } from "../users/useUser";
import { ProfilePanel } from "../users/ProfilePanel";
import { useStore } from "zustand";
import { modalStore } from "./useModal";
import { StyledButton, StyledButtonAvatar } from "../styled/StyledButton";

// for fun bc why not
const LogoSkewer = () => {
  const divRef = useRef();
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const skewFactor = 0.1;
      const skewX = (e.clientX - window.innerWidth / 2) * skewFactor;
      const skewY = (e.clientY - window.innerHeight / 2) * skewFactor;
      if (divRef.current) {
        // @ts-ignore
        divRef.current.style.transform = `skew(${skewX}deg, ${skewY}deg)`;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      {/* @ts-ignore */}
      <div ref={divRef}>
        <Flower />
      </div>
    </>
  );
};

export const Header: React.FC<{ invert?: boolean }> = (props) => {
  const modal = useStore(modalStore);
  const { data: user } = useUser();
  // RENDER
  return (
    <StyledHeader invert={props.invert}>
      <div className="header__logo">
        <LogoSkewer />
      </div>
      <div className="header__inspo">
        <Marquee autoFill>
          <div>JUST KEEP GROWING&ensp;</div>
          {/* <div>FUCK AROUND&ensp;BUILD SHIT&ensp;</div> */}
          {/* <div>JUST GROW IT&ensp;</div> */}
          {/* <div>WE GROW TOGETHER&ensp;</div> */}
        </Marquee>
      </div>
      <div className="header__actions">
        <Link href="/" passHref>
          <StyledButton variant={props.invert ? "green" : "blue"}>
            BIO-QUESTS
          </StyledButton>
        </Link>
        <Link href="/projects" passHref>
          <StyledButton variant={props.invert ? "green" : "blue"}>
            JOIN A CLUB
          </StyledButton>
        </Link>
        {user?.id && (
          <StyledButtonAvatar
            variant={props.invert ? "green" : "blue"}
            onClick={() => modal.setIsOpen(true, <ProfilePanel />)}
          >
            <img alt="profile" src={user.avatar_url} />
          </StyledButtonAvatar>
        )}
      </div>
      {/* TODO: music player */}
    </StyledHeader>
  );
};

const StyledHeader = styled.header<{ invert?: boolean }>`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1.5em;
  pointer-events: none;
  background: ${ugcTheme.colors.green[100]};
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
      height: 48px; // 48px
      @media (max-width: 45em) {
        height: 48px;
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
    @media (max-width: 45em) {
      display: none;
    }
  }
  .header__actions {
    flex-grow: 1;
    display: flex;
    white-space: nowrap;
    button {
      margin-left: 0.5em;
    }
    @media (max-width: 45em) {
      width: 100%;
      justify-content: right;
    }
  }
`;
