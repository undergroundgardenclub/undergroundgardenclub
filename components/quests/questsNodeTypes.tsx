import { ChevronRightIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useInterval } from "react-use";
import { Handle, Position } from "reactflow";
import styled, { css } from "styled-components";
import { ugcTheme } from "../styled/theme";
import Link from "next/link";

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
// START
// ===============================
const StartNodeType = (props: any) => {
  const { data, id } = props;
  const inspos: string[] = [
    // "BEFORE AIRPLANES CAME [MOTORCYCLE MECHANICS](https://en.wikipedia.org/wiki/History_of_aviation#Wright_brothers)...",
    // "BEFORE APPLE CAME THE [HOMEBREW COMPUTER CLUB](https://en.wikipedia.org/wiki/Homebrew_Computer_Club)...",
    // "BEFORE RADIO CAME THE [WIRELESS TELEGRAPH CLUB](https://en.wikipedia.org/wiki/History_of_amateur_radio#Beginnings)...",
    // "BEFORE NASA CAME THE [PACIFIC ROCKET SOCIETY](https://en.wikipedia.org/wiki/Amateur_rocketry#History)...",
    // "BEFORE GOOGLE EARTH CAME [THE CHAOS COMPUTER CLUB](https://en.wikipedia.org/wiki/Terravision_(computer_program))",
  ];
  const [inspoIndex, setInspoIndex] = useState(0);
  const inspo = inspos[inspoIndex];
  useInterval(() => setInspoIndex(inspoIndex + 1), !!inspo ? 1000 * 5 : null);
  return (
    <>
      <StyledStartNodeType variant={data.variant}>
        <ReactMarkdown linkTarget="_blank" className="title">
          {inspo ??
            "WELCOME TO THE [⚘ UNDERGROUND GARDEN CLUB ⚘](https://undergroundgarden.club)"}
        </ReactMarkdown>
        <ReactMarkdown linkTarget="_blank" className="byline">
          Start Experimenting Here
        </ReactMarkdown>
      </StyledStartNodeType>
      <Handle type="source" position={Position.Bottom} id={id} />
    </>
  );
};

const StyledStartNodeType = styled(StyledSectionNodeType)`
  min-width: 100px;
  width: 400px;
  background: blue;
  text-align: center;
  .title p {
    color: white;
    font-size: 16px;
  }
  .byline p {
    font-size: 11px;
    margin-top: 0.2em;
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
      <StyledNodeWrapper>
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
        {data.link && (
          <StyledNodeChevronLink
            className="ready"
            href={data.link}
            target="_blank"
            rel="noreferrer"
            variant={data.variant}
          >
            <ChevronRightIcon />
          </StyledNodeChevronLink>
        )}
      </StyledNodeWrapper>
      <Handle type="source" position={Position.Bottom} id={id} />
    </>
  );
};

const StyledNodeWrapper = styled.div`
  display: flex;
`;

const StyledNodeChevronLink = styled.a<{ variant: string }>`
  flex-grow: 1;
  height: auto;
  background: ${({ variant }) => {
    if (variant === "hardware") return ugcTheme.colors.green[300];
    if (variant === "course") return ugcTheme.colors.yellow[400];
    return ugcTheme.colors.white[500]; // otherwise quest
  }};
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    height: 18px;
    width: 18px;
    margin: 0 3px;
    path {
      fill: ${({ variant }) => {
        if (variant === "hardware") return ugcTheme.colors.blue[100];
        if (variant === "course") return ugcTheme.colors.blue[100];
        return ugcTheme.colors.blue[100]; // otherwise quest
      }};
    }
  }
`;

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
    if (variant && ["hardware"].includes(variant)) {
      return css`
        background: #59ff71;
        &,
        a,
        a:active,
        a:visited,
        a:hover {
          // color: white !important;
        }
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
