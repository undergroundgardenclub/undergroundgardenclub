import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  ReactFlowInstance,
  Edge,
  Node,
} from "reactflow";
import styled from "styled-components";
import { TQuest } from "./types";
import { questEdges, questNodes } from "./questsData";
import { questsNodeTypes } from "./questsNodeTypes";

// TREE
export const QuestTree = ({ quests }: { quests: TQuest[] }) => {
  // TODO: IF WE WANT TO ALLOW FOR DYNAMIC VALUES/CHANGES
  // const [nodes, setNodes, onNodesChange] = useNodesState(questNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(questEdges);

  // RENDER THE JOURNEY
  return (
    <StyledQuestTree>
      <ReactFlow
        nodes={questNodes}
        edges={questEdges}
        nodeTypes={questsNodeTypes}
        // TODO: IF WE WANT TO ALLOW FOR DYNAMIC VALUES/CHANGES
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        onInit={(inst: ReactFlowInstance) => {
          // console.log(inst);
          // console.log(inst.getZoom());
          inst.setCenter(140, -100);
          inst.zoomTo(0.95);
        }}
        edgesUpdatable={false} // still allows for deletion tho?
        nodesConnectable={false}
        proOptions={{ hideAttribution: true }}
      >
        {/* <MiniMap /> */}
        {/* <Controls showInteractive={false} /> */}
        <Background
          style={{ background: "#1f1" }}
          color="#00BBFF"
          variant={BackgroundVariant.Lines}
        />
      </ReactFlow>
    </StyledQuestTree>
  );
};

const StyledQuestTree = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .ugc-node {
    min-width: 280px;
    color: blue;
    border-color: blue;
    font-weight: 900;
  }
  .ugc-edge {
    path {
      stroke: blue;
      stroke-width: 4;
    }
  }
  .ugc-edge--resource {
    path {
      stroke: #d8ff85;
    }
  }
`;
