import styled from "styled-components";

export const StyledResourceList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 36px;
  .resource-list__search {
    display: flex;
    align-items: center;
    margin: 0.25em 0 0.75em;
    svg {
      path {
        fill: white;
      }
    }
    input {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      color: white;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      font-size: 12px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }
  }
  .resource-list__divider {
    display: flex;
    align-items: center;
    color: white;
    opacity: 0.3;
    font-size: 10px;
    margin: 4px 0;
    hr {
      flex-grow: 1;
      margin-left: 0.5em;
    }
  }
  .resource-list__list {
    & > * {
      margin-bottom: 0.5em;
    }
  }
  .resource-list__add-btn {
    margin-top: 1em;
  }
`;
