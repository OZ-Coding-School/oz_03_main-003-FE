import { Route, Routes } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageMy from "./pages/PageMy";
import PageChat from "./pages/PageChat";
import PageAuth from "./pages/PageAuth";
import PageNotFound from "./pages/PageNotFound";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    return (
        <Routes>
            <Route path="/" element={<PageAuth />} />
            <Route path="/home" element={<PrivateRoute element={PageHome} />} />
            <Route path="/mypage" element={<PrivateRoute element={PageMy} />} />
            <Route path="/chat" element={<PrivateRoute element={PageChat} />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default App;
