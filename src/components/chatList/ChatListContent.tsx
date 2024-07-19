import { contentDummy } from "./ChatListDummy";
import ChatListItem from "./ChatListItem";

const ChatListContent = () => {
    return (
        <div className="select-none overflow-y-auto w-fit flex flex-col">
            {contentDummy.map((item, index) => (
                <ChatListItem key={index} item={item} />
            ))}
        </div>
    );
};

export default ChatListContent;
