import { IconAddChat } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";

interface ChatListHeaderProps {
    onAddChatClick: () => void;
}

const ChatListHeader = ({ onAddChatClick }: ChatListHeaderProps) => {
    return (
        <div className="px-5 w-full h-[64px] flex justify-between items-center">
            <div className="text-white select-none text-sm font-medium">목록</div>
            <div
                className={tw(
                    "w-10 h-10 rounded-full flex justify-center items-center",
                    "fill-white hover:fill-primary hover:bg-gray-800",
                    "cursor-pointer transition"
                )}
                onClick={onAddChatClick}
            >
                <IconAddChat className="w-6 h-6" />
            </div>
        </div>
    );
};

export default ChatListHeader;
