import ColorTest from "./ColorTest";
import ButtonDefault from "./components/button/ButtonDefault";
import ButtonDisable from "./components/button/ButtonDisable";
import ButtonError from "./components/button/ButtonError";
import ButtonPrimary from "./components/button/ButtonPrimary";
import ChatListHeader from "./components/chatList/ChatListHeader";

function App() {
    return (
        <div className="font-body flex gap-4 p-10 bg-black w-full h-[100vh]">
            <div>
                <ColorTest />
                <ChatListHeader />
            </div>
            <ButtonDisable>감정 나무</ButtonDisable>
            <ButtonDefault>감정 나무</ButtonDefault>
            <ButtonError>감정 나무</ButtonError>
            <ButtonPrimary>감정 나무</ButtonPrimary>
        </div>
    );
}

export default App;
