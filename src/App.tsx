import { Route, Routes } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageMy from "./pages/PageMy";
import PageChat from "./pages/PageChat";
import PageAuth from "./pages/PageAuth";
import PageNotFound from "./pages/PageNotFound";
import PrivateRoute from "./components/PrivateRoute";
import PageAdmin from "./pages/PageAdmin";
import AdminRoute from "./components/AdminRoute";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        if (location.pathname === "/" || location.pathname === "/account") {
            document.body.classList.add("overflow-y-auto");
        } else {
            document.body.classList.remove("overflow-y-auto");
        }

        return () => {
            document.body.classList.remove("overflow-y-auto");
        };
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<PageAuth />} />
            <Route path="/home" element={<PrivateRoute element={PageHome} />} />
            <Route path="/account" element={<PrivateRoute element={PageMy} />} />
            <Route path="/chat" element={<PrivateRoute element={PageChat} />} />
            <Route path="/admin" element={<AdminRoute element={PageAdmin} />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}
export default App;
