import React from "react";
import styled from "styled-components";
import { useStore } from "zustand";
import { modalStore } from "./useModal";

export const ViewportCenteredFixed = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background: rgba(0, 0, 255, 0.75);
`;

export const StyledModal = styled.div<{ css?: any }>`
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 720px) {
    height: 100%;
    border-radius: 0;
  }
  ${(props) => {
    if (props.css) return props.css;
  }}
`;

export const Modal: React.FC<{ children: React.ReactNode; css?: any }> = (
  props
) => {
  const modal = useStore(modalStore);
  return (
    <ViewportCenteredFixed onClick={() => modal.setIsOpen(false)}>
      <StyledModal
        css={props?.css}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {props.children}
      </StyledModal>
    </ViewportCenteredFixed>
  );
};
