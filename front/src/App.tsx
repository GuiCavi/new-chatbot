import "reactflow/dist/style.css";
import { Chat } from "./chat/Chat";
import { DrawCanvas } from "./canvas/DrawCanvas";

function App() {
  return (
    <div className="w-screen h-screen flex">
      <div className="bg-violet-500 text-white basis-16">Sidebar</div>

      <div className="flex-1">
        <DrawCanvas />
      </div>

      <div className="flex-1 border-l-2 border-l-gray-900">
        <Chat />
      </div>
    </div>
  );
}

export default App;
