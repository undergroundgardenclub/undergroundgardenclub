import React from "react";
import styled from "styled-components";
import { LogoSkewer } from "./LogoSkewer";
import { ugcTheme } from "../styled/theme";
import Link from "next/link";
import { StyledButton } from "../styled/StyledButton";

export const HeaderNav: React.FC<{ invert?: string }> = (props) => {
  return (
    <StyledHeaderNav>
      <LogoSkewer />
      <Link href="/projects" passHref>
        <StyledButton variant={props.invert ? "green" : "blue"}>
          Join a Club / Project
        </StyledButton>
      </Link>
    </StyledHeaderNav>
  );
};

const StyledHeaderNav = styled.header<{ invert?: string }>`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
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
    height: 48px; // 48px
    @media (max-width: 45em) {
      height: 48px;
    }
  }
  // ONLY SHOW LINK ON MOBILE
  @media (min-width: 45em) {
    & > button {
      display: none;
    }
  }
`;
