import { useCallback } from "react";
import ReactFlow, {
  useNodesState, useEdgesState, addEdge, Controls, Background, Connection, ConnectionMode,
} from "reactflow";

import { BezierCurve } from "./components/edges/BezierCurve";
import { Rectangle } from "./components/nodes/Square";

const initialNodes = [
  {
    id: "1", position: { x: 200, y: 200 }, data: { label: "1" }, type: "square",
  },
  {
    id: "2", position: { x: 150, y: 100 }, data: { label: "2" }, type: "square",
  },
  {
    id: "3", position: { x: 300, y: 200 }, data: { label: "3" }, type: "square",
  },
  {
    id: "4", position: { x: 150, y: 300 }, data: { label: "4" }, type: "square",
  },
  {
    id: "5", position: { x: 0, y: 200 }, data: { label: "5" }, type: "square",
  },
];

const initialEdges = [{
  id: "e1t-2r", source: "1", target: "2", sourceHandle: "t", targetHandle: "r",
}];

const NODE_TYPES = {
  square: Rectangle,
};

const EDGE_TYPES = {
  default: BezierCurve,
};

export function DrawCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={NODE_TYPES}
      edgeTypes={EDGE_TYPES}
      proOptions={{ hideAttribution: true }}
      connectionMode={ConnectionMode.Loose}
      defaultEdgeOptions={{
        type: "default",
      }}
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
}
