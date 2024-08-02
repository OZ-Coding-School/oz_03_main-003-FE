import { useEffect, useState } from "react";
import HeaderLoggedIn from "../components/common/header/HeaderLoggedIn";
import ModalCreateChat from "../components/common/modal/ModalCreateChat";
import useChatRooms from "../hook/chat/useChatRooms";
import { useDialogStore, useUserStore } from "../config/store";
import NonData from "../components/NonData";
import useInfo from "../hook/useInfo";
import Dialog from "../components/common/dialog/Dialog";
import ChatListContent from "../components/common/chatList/ChatListContent";
import ChatListHeader from "../components/common/chatList/ChatListHeader";
import useSound from "use-sound";
import btnClick from "../assets/sound/btn_click.mp3";
import { Helmet } from "react-helmet-async";
import dayjs from "dayjs";
import { twMerge as tw } from "tailwind-merge";
const PageChat = () => {
    const { fetchChatRooms, chatRooms } = useChatRooms();
    const { userData } = useUserStore();
    const { getUserInfo, getUserGridInfo, getUserLevelInfo } = useInfo();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [playBtn] = useSound(btnClick, { volume: 0.75 });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { setRoomData, setTreeData, chatroom_uuid: uuid } = useDialogStore();

    const openDialogHandler = (chat_room_uuid: string): void => {
        setRoomData(chat_room_uuid);
        setIsDialogOpen(true);
    };

    const closeDialogHandler = (): void => {
        setIsDialogOpen(false);
        setRoomData("");
    };

    useEffect(() => {
        const refreshUserInfo = async () => {
            await getUserInfo();
            await getUserGridInfo();
            await getUserLevelInfo();
        };
        refreshUserInfo();
    }, [getUserInfo, getUserGridInfo, getUserLevelInfo]);

    useEffect(() => {
        const fetchChatRoomsHandler = async () => {
            await fetchChatRooms();
        };
        fetchChatRoomsHandler();
    }, [fetchChatRooms]);

    useEffect(() => {
        if (chatRooms.length > 0) {
            const validChatRooms = chatRooms.filter((room) =>
                dayjs(room.updated_at).isAfter(dayjs(room.created_at))
            );

            const latestRoom = validChatRooms.reduce((latest, current) => {
                const latestDate = dayjs(latest.updated_at);
                const currentDate = dayjs(current.updated_at);
                return currentDate.isAfter(latestDate) ? current : latest;
            }, validChatRooms[0]);
            const treeName = userData.treeDetail.find(
                (t) => t.tree_uuid === latestRoom?.tree_uuid
            )?.tree_name;

            setRoomData(latestRoom?.chat_room_uuid);
            setTreeData(latestRoom?.tree_uuid, treeName as string);
            setIsDialogOpen(true);
        }
    }, [chatRooms, setRoomData, setTreeData, userData]);

    const openModal = () => {
        setIsModalOpen(true);
        playBtn();
    };
    const closeModal = () => setIsModalOpen(false);

    if (userData.tree.treeCurrent === 0) {
        return (
            <>
                <Helmet>
                    <title>Chat :: Emotree</title>
                </Helmet>
                <HeaderLoggedIn />
                <NonData />
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>Chat :: Emotree</title>
                <meta
                    name="keywords"
                    content="채팅, ai, 챗봇, 채팅서비스, 채팅 서비스, ai 채팅, ai 감정"
                />
                <meta property="twitter:url" content="https://emotree.yoyobar.xyz" />
                <meta name="twitter:title" content="Chat :: Emotree" />
                <meta
                    name="twitter:description"
                    content="AI가 분석한 나의 대화를 나무를 통해 들여다 보세요."
                />
                <meta property="og:url" content="https://emotree.yoyobar.xyz" />
                <meta property="og:title" content="Chat :: Emotree" />
                <meta
                    property="og:description"
                    content="AI가 분석한 나의 대화를 나무를 통해 들여다 보세요."
                />
            </Helmet>
            <div className="font-body">
                <HeaderLoggedIn />
                <div className="bg-black pt-[129px] w-full h-screen box-border">
                    <div className="w-full h-full flex relative">
                        <div
                            className={tw(
                                "w-full h-full border-r border-gray-600 sm:max-w-[320px]"
                            )}
                        >
                            <ChatListHeader onAddChatClick={openModal} />
                            <ChatListContent
                                onChatItemClick={openDialogHandler}
                                onClose={closeDialogHandler}
                            />
                        </div>
                        <div className="text-white h-full sm:w-full">
                            {isDialogOpen && uuid !== "" && <Dialog onClose={closeDialogHandler} />}
                        </div>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-body">
                        <ModalCreateChat onClose={closeModal} />
                    </div>
                )}
            </div>
        </>
    );
};

export default PageChat;
