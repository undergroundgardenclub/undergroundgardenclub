import React from "react";
import { LogoSkewer } from "./LogoSkewer";
import styled from "styled-components";
import { ugcTheme } from "../styled/theme";

export const FloatingLogo = () => {
  return (
    <StyledFloatingLogo>
      <LogoSkewer />
    </StyledFloatingLogo>
  );
};

const StyledFloatingLogo = styled.div`
  position: absolute;
  z-index: 10;
  top: 1em;
  left: 1em;
  // transform: rotate(180deg);
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
`;
