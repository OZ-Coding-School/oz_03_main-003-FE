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
import BadgeJoy from "./components/badge/BadgeJoy";
import BadgeHappy from "./components/badge/BadgeHappy";
import BadgeSorrow from "./components/badge/IconSorrow";
import BadgeIndifference from "./components/badge/BadgeIndifference";

function Layout() {
    return (
        <div className="font-body flex gap-4 p-10 bg-black w-full h-[200vh]">
            <div>
                <Gnb />
                <ChatListHeader />
                <ChatListContent />
                <ButtonEmoTree>감정을 나무에게 전달하기</ButtonEmoTree>
            </div>
            <div>
                <BadgeAngry />
                <BadgeJoy />
                <BadgeHappy />
                <BadgeSorrow />
                <BadgeIndifference />
            </div>
            <ButtonDisable>감정 나무</ButtonDisable>
            <ButtonDefault>감정 나무</ButtonDefault>
            <ButtonError>감정 나무</ButtonError>
            <ButtonPrimary>감정 나무</ButtonPrimary>
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
