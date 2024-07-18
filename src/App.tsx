import { Navigate, Route, Routes } from "react-router-dom";
import PageHome from "./pages/PageHome";
import PageMy from "./pages/PageMy";
import PageChat from "./pages/PageChat";
import PageAuth from "./pages/PageAuth";
import { useEffect, useState } from "react";
import { tokenApi } from "./api";
import PageLoading from "./pages/PageLoading";
import PageNotFound from "./pages/PageNotFound";

interface DefaultProps {
    [key: string]: unknown;
}

type ComponentType = React.ComponentType<DefaultProps>;

interface PrivateRouteProps {
    element: ComponentType;
    [key: string]: unknown;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component }, ...rest) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const verifyResponse = await tokenApi.userTokenVerify();

                if (verifyResponse.status === 401) {
                    await tokenApi.userTokenRefresh();
                }

                setIsAuthenticated(true);
            } catch (error) {
                setIsAuthenticated(false);
            }
        };

        checkLoginStatus();
    }, []);

    if (isAuthenticated === null) {
        return <PageLoading />;
    }

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

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
