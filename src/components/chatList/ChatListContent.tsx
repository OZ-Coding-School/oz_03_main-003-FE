import { contentDummy } from "./ChatListDummy";

const ChatListContent = () => {
    console.log(contentDummy);

    return (
        <div className="flex flex-col justify-center">
            {contentDummy.map((item, index) => (
                <div
                    className="text-white px-5 py-3 w-[300px] h-16 flex flex-col justify-center"
                    key={index}
                >
                    <div>{item.chat_room_name}</div>
                </div>
            ))}
        </div>
    );
};

export default ChatListContent;
