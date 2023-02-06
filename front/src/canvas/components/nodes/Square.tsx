import { Handle, NodeProps, Position } from "reactflow";

export function Rectangle({ data }: NodeProps) {
  return (
    <div className="flex items-center justify-center text-white font-bold px-6 py-6 w-10 h-10 bg-violet-700 rounded-md">
      <Handle
        type="source"
        position={Position.Top}
        id="t"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="r"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      {data.label}
    </div>
  );
}
