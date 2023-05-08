import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../styled/Logo";
import styled from "styled-components";
import { ViewMode, ugcStore } from "../ugcStore";
import { useInterval, useMouse } from "react-use";
import { Flower } from "../styled/Flower";
import Marquee from "react-fast-marquee";

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

export const Header = () => {
  const { viewMode, setViewMode } = ugcStore();
  return (
    <StyledHeader>
      <div className="header__logo">
        <LogoSkewer />
      </div>
      <div className="header__inspo">
        <Marquee autoFill>
          <div>JUST KEEP GROWING&ensp;</div>
        </Marquee>
      </div>
      <div className="header__actions">
        {/* TODO: music player */}
        <a href="https://genspace.org" target="_blank" rel="noreferrer">
          <StyledButton>JOIN GENSPACE</StyledButton>
        </a>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75em 1.5em;
  pointer-events: none;
  .header__logo {
    transform: rotate(180deg);
    svg {
      mix-blend-mode: difference;
      path {
        fill: blue;
      }
    }
    &,
    svg {
      height: 60px; // 48px
      @media (max-width: 45em) {
        height: 48px;
      }
    }
  }
  .header__inspo {
    flex-grow: 1;
    color: blue;
    font-family: "Stonewall 50";
    font-size: 24px;
    overflow: hidden;
  }
  .header__actions {
    flex-grow: 1;
    width: 280px;
    max-width: 280px;
    text-align: right;
  }
`;

const StyledButton = styled.button`
  pointer-events: all;
  text-transform: uppercase;
  border: none;
  background: blue;
  color: white;
  font-family: "Stonewall 50";
  padding: 8px 12px 6px;
  font-size: 13px;
  cursor: pointer;
  transform: skew(-5deg, 0);
`;
