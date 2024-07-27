import DialogHeader from "./DialogHeader";
import InputMessage from "./InputMessage";
import DialogRoom from "./DialogRoom";
import { useUserChatStore } from "../../../config/store";

interface DialogProps {
    onClose: () => void;
    chatRoomUuid: string;
}
const Dialog = ({ onClose, chatRoomUuid }: DialogProps) => {
    const { userMessages } = useUserChatStore();

    console.log(userMessages);
    return (
        <div className="h-full w-[800px] mx-auto flex flex-col border-l border-r border-gray-600 overflow-hidden">
            <DialogHeader onClose={onClose} chatRoomUuid={chatRoomUuid} />
            <DialogRoom chatRoomUuid={chatRoomUuid} />
            <InputMessage chatRoomUuid={chatRoomUuid} />
        </div>
    );
};

export default Dialog;