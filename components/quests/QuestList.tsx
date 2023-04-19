import React from "react";
import { TQuest } from "./types";
import styled from "styled-components";

export const QuestList = ({ quests }: { quests: TQuest[] }) => {
  return (
    <StyledQuestList>
      {quests.map((quest) => (
        <a
          key={quest.url}
          className="quest-box"
          rel="noreferrer"
          target="_blank"
          href={quest.url}
        >
          {quest.title}
        </a>
      ))}
    </StyledQuestList>
  );
};

const StyledQuestList = styled.div`
  .quest-box {
    display: block;
    background: #1f1;
    margin: 12px 0;
    padding: 16px 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 125%;
    border-bottom: 4px solid #1a1;
    text-transform: uppercase;
    text-align: center;
    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  }
`;
