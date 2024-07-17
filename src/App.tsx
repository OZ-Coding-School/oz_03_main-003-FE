import { Route, Routes } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageMy from "./pages/PageMy";
import PageChat from "./pages/PageChat";
import PageNotFound from "./pages/PageNotFound";
import PageAuth from "./pages/PageAuth";

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
