import { Route, Routes } from "react-router-dom";
import ButtonDefault from "./components/button/ButtonDefault";
import ButtonDisable from "./components/button/ButtonDisable";
import ButtonError from "./components/button/ButtonError";
import ButtonPrimary from "./components/button/ButtonPrimary";
import ChatListContent from "./components/chatList/ChatListContent";
import ChatListHeader from "./components/chatList/ChatListHeader";
import ButtonEmoTree from "./components/button/ButtonEmoTree";
import Gnb from "./Gnb";
import BadgeAngry from "./components/badge/BadgeAngry";
import BadgeHappy from "./components/badge/BadgeHappy";
import BadgeIndifference from "./components/badge/BadgeIndifference";
import BadgeJoy from "./components/badge/BadgeJoy";
import BadgeSorrow from "./components/badge/BadgeSorrow";
import BadgeWorry from "./components/badge/BadgeWorry";
import Description from "./components/common/Description";
import Progress from "./components/common/Progress";
import ModalDeleteChat from "./components/modal/ModalDeleteChat";
import ModalUpdateChat from "./components/modal/ModalUpdateChat";
import ModalCreateChat from "./components/modal/ModalCreateChat";
import ModalCreateTree from "./components/modal/ModalCreateTree";
import ButtonSignInGoogle from "./components/button/ButtonSignInGoogle";
import ButtonSignInKakao from "./components/button/ButtonSignInKakao";
import ModalModifyTreeName from "./components/modal/ModalModifyTreeName";
import ModalChangeLocation from "./components/modal/ModalChangeLocation";
function Layout() {
    return (
        <div className="font-body flex gap-4 p-10 bg-black w-full h-[200vh]">
            <div>
                <Gnb />
                <h1 className="text-white text-4xl font-title">Common Components</h1>
                <Description />
                <Progress />
                <ChatListHeader />
                <ChatListContent />
                <ButtonEmoTree>감정을 나무에게 전달하기</ButtonEmoTree>
            </div>
            <ButtonDisable>감정 나무</ButtonDisable>
            <ButtonDefault>감정 나무</ButtonDefault>
            <ButtonError>감정 나무</ButtonError>
            <ButtonPrimary>감정 나무</ButtonPrimary>
            <div>
                <div className="flex flex-col gap-2">
                    <BadgeAngry />
                    <BadgeJoy />
                    <BadgeHappy />
                    <BadgeSorrow />
                    <BadgeIndifference />
                    <BadgeWorry />
                    <ModalDeleteChat />
                    <ModalUpdateChat />
                    <ModalCreateChat />
                    <ModalCreateTree />
                    <ModalModifyTreeName />
                    <ModalChangeLocation />
                    <ButtonSignInGoogle />
                    <ButtonSignInKakao />
                </div>
            </div>
        </div>
    );
}
function App() {
    return (
        <Routes>
            <Route index element={<Layout />} />
            <Route
                path="/home"
                element={
                    <div>
                        <Gnb />
                        그리드 페이지
                    </div>
                }
            />
            <Route path="/mypage" element={<Gnb />} />
            <Route path="/chat" element={<Gnb />} />
            <Route path="*" element={<Gnb />} />
        </Routes>
    );
}

export default App;
