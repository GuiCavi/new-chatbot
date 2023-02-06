import { EdgeProps, getBezierPath } from "reactflow";

export function BezierCurve({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <path
      id={id}
      style={style}
      className="react-flow__edge-path stroke-[2]"
      d={edgePath}
      markerEnd={markerEnd}
    />
  );
}
