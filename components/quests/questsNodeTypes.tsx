import { ArrowRightIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useInterval } from "react-use";
import { Handle, Position } from "reactflow";
import styled, { css } from "styled-components";
import { ugcTheme } from "../styled/theme";
import ReactPlayer from "react-player";
import { StyledButton } from "../styled/StyledButton";
import { useUser } from "../users/useUser";
import { SSOPanel } from "../users/SSOPanel";
import { useStore } from "zustand";
import { modalStore } from "../layout/useModal";

export const AIRTABLE_FORM_LEARNING_GROUP_URL =
  "https://airtable.com/app35mfgElk9BL3ov/shrBrDRNiPoLZPojH";
export const AIRTABLE_FORM_CONTRIBUTION_URL =
  "https://airtable.com/app35mfgElk9BL3ov/shrqYH8gLQJHsDApm";

const StyledBaseNodeType = styled.div<{
  minWidth?: string;
  padding?: boolean;
  variant?: string;
}>`
  margin: 0;
  padding: ${({ padding }) => (padding !== false ? "0.5em 1em" : "0.5em 0 0")};
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
    padding: 0 0.5em;
  }
  .byline {
    font-size: 10px;
  }
  .actions {
    width: 100%;
    margin-top: 4px;
    display: flex;
    &.column {
      flex-direction: column;
      a {
        margin-bottom: 6px;
      }
    }
    a,
    button {
      width: 100%;
      font-size: 16px;
      text-align: center;
    }
  }
  .quest-node__video-player {
    width: 100%;
    min-width: 250px;
    height: 150px;
  }
  .quest-node__thumbnail {
    display: flex;
    width: 100%;
    min-width: 250px;
    height: 150px;
  }
  .quest-node__audio-player {
    &,
    & > div {
      width: 100%;
    }
    audio::-webkit-media-controls-enclosure {
      border-radius: 0;
      // background-color: #00f;
    }
    audio::-webkit-media-controls-panel {
      // filter: invert(1);
    }
  }
`;

const StyledDivImage = styled.div<{ alt?: string; src: string }>`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  background-image: ${({ src }) => `url("${src}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ActionsJoinLearningCircle = () => (
  <div className="actions">
    <StyledButton
      as="a"
      variant="green"
      href={AIRTABLE_FORM_LEARNING_GROUP_URL}
      target="_blank"
    >
      Join the Learning Club
    </StyledButton>
  </div>
);

const ActionsContribute = () => (
  <div className="actions">
    <StyledButton
      as="a"
      variant="green"
      href={AIRTABLE_FORM_CONTRIBUTION_URL}
      target="_blank"
    >
      Contribute Quests & Learning
    </StyledButton>
  </div>
);

const ActionsBootCamps = () => (
  <>
    <div className="actions column">
      <StyledButton
        as="a"
        variant="green"
        href="https://www.genspace.org/classes"
        target="_blank"
      >
        Genspace (NYC) →
      </StyledButton>
      <StyledButton
        as="a"
        variant="green"
        href="https://biotechwithoutborders.org/events/"
        target="_blank"
      >
        Biotech Without Borders (NYC) →
      </StyledButton>
      <StyledButton
        as="a"
        variant="green"
        href="https://www.meetup.com/Counter-Culture-Labs/"
        target="_blank"
      >
        Counter Culture Labs (Oakland) →
      </StyledButton>
    </div>
    <small>Search for community bio labs near you!</small>
  </>
);

// ===============================
// SECTION HEADER
// ===============================

const SectionNodeType = (props: any) => {
  const { data, id } = props;
  return (
    <>
      <Handle type="target" position={Position.Top} id={id} />
      <StyledSectionNodeType padding={data.padding} variant={data.variant}>
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
  // SETUP
  const { data, id } = props;
  // RENDER
  return (
    <>
      <Handle type="target" position={Position.Top} id={id} />
      <StyledStartNodeType minWidth={data.minWidth} variant={data.variant}>
        <ReactMarkdown linkTarget="_blank" className="title">
          {data.title}
        </ReactMarkdown>
        <ReactMarkdown linkTarget="_blank" className="byline">
          {/* Start Experimenting Here! */}
          {/* What are you curious about? */}
          {data.byLine}
        </ReactMarkdown>
        {data.variant === "joinClub" && <ActionsJoinLearningCircle />}
        {data.variant === "contributing" && <ActionsContribute />}
      </StyledStartNodeType>
      <Handle type="source" position={Position.Bottom} id={id} />
    </>
  );
};

const StyledStartNodeType = styled(StyledSectionNodeType)`
  min-width: ${({ minWidth }) => minWidth ?? "320px"};
  background: blue;
  text-align: center;
  .title p {
    color: white;
    font-size: 16px;
  }
  .byline p {
    margin-top: 0.2em;
  }
`;

// ===============================
// SPECIAL NODE TYPES
// ===============================

const BootcampNodeType = (props: any) => {
  const { data, id } = props;
  return (
    <>
      <Handle type="target" position={Position.Top} id={id} />
      <StyledQuestNodeType minWidth={data.minWidth} variant={data.variant}>
        <ReactMarkdown linkTarget="_blank" className="title">
          {data.title}
        </ReactMarkdown>
        <ReactMarkdown linkTarget="_blank" className="byline">
          {/* Start Experimenting Here! */}
          {/* What are you curious about? */}
          {data.byLine}
        </ReactMarkdown>
        {/* {data.variant === "joinClub" && <ActionsJoinLearningCircle />} */}
        <ActionsBootCamps />
      </StyledQuestNodeType>
      <Handle type="source" position={Position.Bottom} id={id} />
    </>
  );
};

const RadioNodeType = (props: any) => {
  const { data, id } = props;
  return (
    <>
      <Handle type="target" position={Position.Top} id={id} />
      <StyledQuestNodeType variant="media">
        <iframe
          src="https://open.spotify.com/embed/playlist/0NxybLGdBjs4AL4vv1YdIb?utm_source=generator&theme=1"
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <ReactMarkdown linkTarget="_blank" className="title">
          GARDEN CLUB RADIO
        </ReactMarkdown>
      </StyledQuestNodeType>
      <Handle type="source" position={Position.Bottom} id={id} />
    </>
  );
};

// ===============================
// QUEST TILE
// ===============================

const QuestNodeType = (props: any) => {
  const { data, id } = props;
  return (
    <>
      <Handle type="target" position={Position.Top} id={id} />
      <StyledNodeWrapper>
        <StyledQuestNodeType padding={data.padding} variant={data.variant}>
          <ReactMarkdown linkTarget="_blank" className="title">
            {data.title}
          </ReactMarkdown>
          {data.byLine && (
            <ReactMarkdown linkTarget="_blank" className="byline">
              {data.byLine}
            </ReactMarkdown>
          )}
          {data.audioUrl && (
            <div className="quest-node__audio-player">
              <audio controls>
                <source src={data.audioUrl} />
              </audio>
            </div>
          )}
          {data.videoUrl && (
            <div className="quest-node__video-player">
              <ReactPlayer
                url={data.videoUrl}
                light={
                  data.thumbnailUrl ? (
                    <div className="quest-node__thumbnail">
                      <StyledDivImage
                        src={data.thumbnailUrl}
                        alt={data.thumbnailAlt}
                      />
                      {/* <img src={data.thumbnailUrl} alt={data.thumbnailAlt} /> */}
                    </div>
                  ) : (
                    true
                  )
                }
                controls
                config={{
                  youtube: {
                    playerVars: { controls: 1, showinfo: 1 },
                  },
                  vimeo: {
                    playerOptions: {
                      controls: true,
                      byline: false,
                      title: false,
                    },
                  },
                }}
                height="100%"
                width="100%"
              />
            </div>
          )}
          {data.thumbnailUrl && !data.videoUrl ? (
            <div className="quest-node__thumbnail">
              <StyledDivImage src={data.thumbnailUrl} alt={data.thumbnailAlt} />
              {/* <img src={data.thumbnailUrl} alt={data.thumbnailAlt} /> */}
            </div>
          ) : null}
        </StyledQuestNodeType>
        {data.link && (
          <StyledNodeChevronLink
            className="ready"
            href={data.link}
            target="_blank"
            rel="noreferrer"
            variant={data.variant}
          >
            {/* <ChevronRightIcon /> */}
            <ArrowRightIcon />
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
    width: 14px;
    margin: 0 3px;
    path {
      fill: ${({ variant }) => {
        if (variant === "hardware") return ugcTheme.colors.blue[100];
        if (variant === "course") return ugcTheme.colors.blue[100];
        return ugcTheme.colors.blue[100]; // otherwise quest
      }};
      stroke: ${({ variant }) => {
        if (variant === "hardware") return ugcTheme.colors.blue[100];
        if (variant === "course") return ugcTheme.colors.blue[100];
        return ugcTheme.colors.blue[100]; // otherwise quest
      }};
      stroke-width: 0.5px;
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
    if (variant && ["media"].includes(variant)) {
      return css`
        background: blue;
        p {
          color: white !important;
          margin-top: 4px;
        }
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
  bootcamp: BootcampNodeType,
  section: SectionNodeType,
  start: StartNodeType,
  quest: QuestNodeType,
  radio: RadioNodeType,
};
