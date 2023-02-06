import {
  List, Message, Input, Button,
} from "../components";
import { ME_ID_USER } from "../constants/user";
import { IMessage } from "../domain/Message.types";
import { OutlineAirplane } from "../icons";

const messages: IMessage[] = [
  { text: "Message 1", user: 1 },
  { text: "Message 2", user: 1 },
  { text: "Message 3", user: 2 },
  { text: "Message 4", user: 2 },
  { text: "Message 5", user: 1 },
  { text: "Message 6", user: 2 },
  { text: "Message 7", user: 1 },
  { text: "Message 8", user: 2 },
];

export function Chat() {
  return (
    <div className="flex flex-col h-full">
      <List
        data={messages}
        renderItem={(item: IMessage) => <Message isMine={item.user === ME_ID_USER} text={item.text} />}
      />

      <div className="px-16 h-16 flex items-center justify-center gap-4">
        <Input />
        <Button round>
          <OutlineAirplane />
        </Button>
      </div>
    </div>
  );
}
