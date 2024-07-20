import { useCallback, useEffect, useState } from "react";
import { authApi } from "../api";
import PageLoading from "../pages/PageLoading";
import { Navigate, useLocation } from "react-router-dom";

interface DefaultProps {
    [key: string]: unknown;
}

interface PrivateRouteProps {
    element: React.ComponentType<DefaultProps>;
    [key: string]: unknown;
}

enum authStatusType {
    LOADING = 1,
    VERIFIED = 2,
    UNVERIFIED = 3,
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component, ...rest }) => {
    const [authStatus, setAuthStatus] = useState<authStatusType>(authStatusType.LOADING);
    const { pathname } = useLocation();

    const checkLoginStatus = useCallback(async () => {
        try {
            const verifyResponse = await authApi.userTokenVerify();

            setAuthStatus(
                verifyResponse.status === 200 ? authStatusType.VERIFIED : authStatusType.UNVERIFIED
            );
        } catch (error) {
            console.log("AccessToken Verification Failed. Retrying...");
            try {
                await authApi.userTokenRefresh();
                const retryResponse = await authApi.userTokenVerify();
                setAuthStatus(
                    retryResponse.status === 200
                        ? authStatusType.VERIFIED
                        : authStatusType.UNVERIFIED
                );
            } catch (retryError) {
                console.error("RefreshToken Verification Failed :", retryError);
                setAuthStatus(authStatusType.UNVERIFIED);
            }
        }
    }, []);

    useEffect(() => {
        checkLoginStatus();
    }, [checkLoginStatus, pathname]);

    switch (authStatus) {
        case authStatusType.LOADING:
            return <PageLoading />;
        case authStatusType.VERIFIED:
            return <Component {...rest} />;
        case authStatusType.UNVERIFIED:
            return <Navigate to="/" />;
    }
};

export default PrivateRoute;
