import { Route, Routes } from "react-router-dom";
import PageHome from "./page/PageHome";
import PageMy from "./page/PageMy";
import PageChat from "./page/PageChat";
import PageNotFound from "./page/PageNotFound";
import PageAuth from "./page/PageAuth";

function App() {
    return (
        <Routes>
            <Route index element={<PageAuth />} />
            <Route path="/home" element={<PageHome />} />
            <Route path="/mypage" element={<PageMy />} />
            <Route path="/chat" element={<PageChat />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
