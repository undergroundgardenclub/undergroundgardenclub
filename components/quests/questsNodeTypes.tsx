import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useInterval } from "react-use";
import { Handle, Position } from "reactflow";
import styled, { css } from "styled-components";

const StyledBaseNodeType = styled.div<{ variant?: string }>`
  margin: 0;
  padding: 0.5em 1em;
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
    line-height: 125%;
    a,
    a:active,
    a:visited,
    a:hover {
      color: white;
      text-decoration: underline;
    }
  }
  .title {
    font-size: 13px;
  }
  .byline {
    font-size: 10px;
  }
`;

// ===============================
// START
// ===============================
const StartNodeType = (props: any) => {
  const { data, id } = props;
  const inspos = [
    // "BEFORE AIRPLANES CAME [MOTORCYCLE MECHANICS](https://en.wikipedia.org/wiki/History_of_aviation#Wright_brothers)...",
    "BEFORE APPLE CAME THE [HOMEBREW COMPUTER CLUB](https://en.wikipedia.org/wiki/Homebrew_Computer_Club)...",
    "BEFORE RADIO CAME THE [WIRELESS TELEGRAPH CLUB](https://en.wikipedia.org/wiki/History_of_amateur_radio#Beginnings)...",
    "BEFORE NASA CAME THE [PACIFIC ROCKET SOCIETY](https://en.wikipedia.org/wiki/Amateur_rocketry#History)...",
    "BEFORE GOOGLE EARTH CAME [THE CHAOS COMPUTER CLUB](https://en.wikipedia.org/wiki/Terravision_(computer_program))",
  ];
  const [inspoIndex, setInspoIndex] = useState(0);
  const inspo = inspos[inspoIndex];
  useInterval(() => setInspoIndex(inspoIndex + 1), !!inspo ? 1000 * 5 : null);
  return (
    <>
      <StyledSectionNodeType variant={data.variant}>
        <ReactMarkdown linkTarget="_blank" className="title">
          {inspo ??
            "WELCOME TO THE [⚘ UNDERGROUND GARDEN CLUB ⚘](https://undergroundgarden.club)"}
        </ReactMarkdown>
      </StyledSectionNodeType>
      <Handle type="source" position={Position.Bottom} id={id} />
    </>
  );
};

// ===============================
// SECTION HEADER
// ===============================
const SectionNodeType = (props: any) => {
  const { data, id } = props;
  return (
    <>
      <Handle type="target" position={Position.Top} id={id} />
      <StyledSectionNodeType variant={data.variant}>
        <ReactMarkdown linkTarget="_blank" className="title">
          {data.title}
        </ReactMarkdown>
        {data.byLine && (
          <ReactMarkdown linkTarget="_blank" className="byline">
            {data.byLine}
          </ReactMarkdown>
        )}
      </StyledSectionNodeType>
      <Handle type="source" position={Position.Bottom} id={id} />
    </>
  );
};

const StyledSectionNodeType = styled(StyledBaseNodeType)`
  min-width: 80px;
  background: blue;
  text-align: center;
  p {
    color: white;
  }
`;

// ===============================
// QUEST TILE
// ===============================
const QuestNodeType = (props: any) => {
  const { data, id } = props;
  return (
    <>
      <Handle type="target" position={Position.Top} id={id} />
      <StyledQuestNodeType variant={data.variant}>
        <ReactMarkdown linkTarget="_blank" className="title">
          {data.title}
        </ReactMarkdown>
        {data.byLine && (
          <ReactMarkdown linkTarget="_blank" className="byline">
            {data.byLine}
          </ReactMarkdown>
        )}
      </StyledQuestNodeType>
      <Handle type="source" position={Position.Bottom} id={id} />
    </>
  );
};

const StyledQuestNodeType = styled(StyledBaseNodeType)`
  min-width: 80px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  &,
  a,
  a:active,
  a:visited,
  a:hover {
    color: blue !important; // todo not do this lol
  }
  ${({ variant }) => {
    if (variant && ["course", "reading"].includes(variant)) {
      return css`
        background: #d8ff85;
      `;
    }
  }}
`;

// EXPORT FOR REACT FLOW: BE AWARE OF NAMING MATCHING questsData type: "xyz"
// https://reactflow.dev/docs/api/nodes/custom-nodes/
// https://reactflow.dev/docs/guides/custom-nodes/
export const questsNodeTypes = {
  section: SectionNodeType,
  start: StartNodeType,
  quest: QuestNodeType,
};
