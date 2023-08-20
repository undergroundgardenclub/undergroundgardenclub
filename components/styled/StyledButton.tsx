import styled from "styled-components";
import { ugcTheme } from "./theme";

type TStyledButtonProps = { variant?: TStyledButtonVariant };
type TStyledButtonVariant = "green" | "blue" | "white" | "transparent";

export const StyledButton = styled.button<TStyledButtonProps>`
  background: ${(props) => {
    if (props.variant === "green") return ugcTheme.colors.green[500];
    if (props.variant === "blue") return ugcTheme.colors.blue[500];
    return "transparent";
  }};
  color: ${(props) => {
    if (props.variant === "green") return ugcTheme.colors.blue[500];
    if (props.variant === "blue") return ugcTheme.colors.white[900];
    if (props.variant === "white") return ugcTheme.colors.white[900];
    return "black";
  }};
  border: ${(props) => {
    if (props.variant === "green") return "none";
    if (props.variant === "blue") return "none";
    if (props.variant === "white") return "solid 2px white";
    return "solid 2px black";
  }};
  font-family: ${ugcTheme.fonts.display};
  font-size: 13px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 8px 12px 6px;
  pointer-events: all;
  cursor: pointer;
  // transform: skew(-5deg, 0);
  height: 32px;
  &:disabled {
    opacity: 0.5;
  }
`;

export const StyledButtonAvatar = styled(StyledButton)`
  padding: 0;
  min-width: 28px;
  img {
    height: 100%;
  }
`;
