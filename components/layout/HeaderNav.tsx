import React from "react";
import styled from "styled-components";
import { LogoSkewer } from "./LogoSkewer";
import { ugcTheme } from "../styled/theme";
import Link from "next/link";
import { StyledButton } from "../styled/StyledButton";
import Marquee from "react-fast-marquee";

export const HeaderNav: React.FC<{ invert?: string }> = (props) => {
  return (
    <StyledHeaderNav>
      <LogoSkewer />
      <div className="header__inspo">
        <Marquee autoFill>
          <div>JUST KEEP GROWING&ensp;</div>
        </Marquee>
      </div>
    </StyledHeaderNav>
  );
};

const StyledHeaderNav = styled.header<{ invert?: string }>`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em;
  pointer-events: none;
  svg {
    mix-blend-mode: difference;
    path {
      fill: ${(props) =>
        props.invert ? ugcTheme.colors.green[500] : ugcTheme.colors.blue[500]};
    }
  }
  &,
  svg {
    height: 28px; // 28px
    @media (max-width: 720px) {
      height: 28px;
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
    border-color: ${ugcTheme.colors.blue[500]};
    align-items: center;
    display: flex;
    padding-top: 0.25em;
  }

  // navbar goes flush with right edge of screen when on mobile
  @media (max-width: 720px) {
    right: 0;
  }
`;
