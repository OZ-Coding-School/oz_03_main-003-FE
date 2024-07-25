import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";
import { IconChange, IconDeleteBtn } from "../../../config/IconData";

interface ChatListItemProps {
    item: {
        chat_room_uuid: string;
        chat_room_name: string;
        created_at: string;
        tree_name: string;
    };
}

const ChatListItem = ({ item }: ChatListItemProps) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className={tw(
                "text-white px-5 py-3 fill-white",
                "w-[300px] h-16 flex justify-between items-center",
                "hover:bg-gray-800 transition cursor-pointer"
            )}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <nav className="flex flex-col">
                <div className="text-sm">{item.chat_room_name}</div>
                <div className="text-gray-400 text-xs">{item.created_at}</div>
                <div className="text-gray-400 text-xs">{item.tree_name}</div>
            </nav>
            {hover && (
                <nav className="flex gap-1">
                    <div className="w-8 h-8 cursor-pointer rounded-full transition flex hover:bg-gray-600 justify-center items-center">
                        <IconChange className="w-[18px] h-[18px]" />
                    </div>
                    <div className="w-8 h-8 cursor-pointer rounded-full transition flex hover:bg-gray-600 justify-center items-center">
                        <IconDeleteBtn className="w-[18px] h-[18px]" />
                    </div>
                </nav>
            )}
        </div>
    );
};

export default ChatListItem;
