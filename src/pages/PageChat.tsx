import { contentDummy } from "../components/chatList/ChatListDummy";
import ChatListHeader from "../components/chatList/ChatListHeader";
import ChatListItem from "../components/chatList/ChatListItem";
import HeaderLoggedIn from "../components/header/HeaderLoggedIn";

const PageChat = () => {
    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="w-full h-full flex">
                    <div className="w-80 h-full border-r border-gray-600">
                        <ChatListHeader />
                        {contentDummy.map((item, index) => (
                            <ChatListItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageChat;
