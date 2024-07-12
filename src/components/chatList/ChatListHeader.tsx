import { IconAddChat } from "../../IconData";
import { twMerge as tw } from "tailwind-merge";
const ChatListHeader = () => {
    return (
        <div className="px-5 w-[300px] h-[64px] border border-gray-800  flex justify-between items-center">
            <div className="text-white">목록</div>
            <div
                className={tw(
                    "w-10 h-10 rounded-full flex justify-center items-center",
                    "fill-white hover:fill-primary hover:bg-gray-800",
                    "cursor-pointer transition"
                )}
            >
                <IconAddChat className="w-6 h-6" />
            </div>
        </div>
    );
};

export default ChatListHeader;
