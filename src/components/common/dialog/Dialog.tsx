import DialogHeader from "./DialogHeader";
import DialogRoom from "./DialogRoom";
import InputMessage from "./InputMessage";

interface DialogProps {
    onClose: () => void;
    chatRoomUuid: string;
}

const Dialog = ({ onClose, chatRoomUuid }: DialogProps) => {
    return (
        <div className="h-full w-[800px] mx-auto flex flex-col border-l border-r border-gray-600 px-5">
            <DialogHeader onClose={onClose} chatRoomUuid={chatRoomUuid} />
            <DialogRoom />
            <InputMessage />
        </div>
    );
};

export default Dialog;
