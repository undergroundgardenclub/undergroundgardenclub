import * as Bowser from "bowser";
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  ReactFlowInstance,
  Controls,
} from "reactflow";
import styled from "styled-components";
import { TQuest } from "./types";
import { questEdges, questNodes } from "./questsData";
import { questsNodeTypes } from "./questsNodeTypes";
import { useEffect } from "react";
import { ugcTheme } from "../styled/theme";

// TREE
export const QuestTree = ({ quests }: { quests: TQuest[] }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(questNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(questEdges);

  // i like that people can play w/ positioning in the UI, but i want hotreloading
  useEffect(() => {
    setNodes(questNodes);
    setEdges(questEdges);
  }, [questNodes, questEdges]);

  // RENDER THE JOURNEY
  return (
    <StyledQuestTree>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={questsNodeTypes}
        // Not allowing updates makes it a bit easier to navigate on mobile
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={(inst: ReactFlowInstance) => {
          const browser = Bowser.getParser(window.navigator.userAgent);
          const isMobile = browser.getPlatformType() !== "desktop";
          // console.log(inst);
          // console.log(inst.getZoom());
          inst.setCenter(isMobile ? 110 : 110, isMobile ? -100 : 0);
          inst.zoomTo(isMobile ? 0.7 : 0.75);
        }}
        edgesUpdatable={false} // still allows for deletion tho?
        nodesConnectable={false}
        proOptions={{ hideAttribution: true }}
      >
        {/* <MiniMap /> */}
        <Controls showInteractive={false} />
        <Background
          style={{ background: ugcTheme.colors.green[500] }}
          color={ugcTheme.colors.blue[700]}
          variant={BackgroundVariant.Lines}
        />
      </ReactFlow>
    </StyledQuestTree>
  );
};

const StyledQuestTree = styled.div`
  width: 100%;
  height: 100%;
  .ugc-node {
    min-width: 280px;
    color: blue;
    border-color: blue;
    font-weight: 900;
  }
  .ugc-edge {
    path {
      stroke: blue;
      stroke-width: 5;
    }
  }
  .ugc-edge--dashed {
    path {
      stroke: rgba(0, 0, 255, 0.3);
      stroke-width: 5;
      stroke-dasharray: 10px;
    }
  }
  .ugc-edge--course {
    path {
      stroke-width: 3;
      stroke: ${ugcTheme.colors.yellow[700]};
    }
  }
  .ugc-edge--hardware {
    path {
      stroke-width: 3;
      stroke: ${ugcTheme.colors.green[100]};
      opacity: 0.7;
    }
  }
`;
