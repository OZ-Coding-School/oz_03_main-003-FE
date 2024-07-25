import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoading from "../pages/PageLoading";
import useVerify from "../hook/useVerify";
import { useModalStore } from "../config/store";

interface DefaultProps {
    [key: string]: unknown;
}

interface PrivateRouteProps {
    element: React.ComponentType<DefaultProps>;
    [key: string]: unknown;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component, ...rest }) => {
    const { checkLoginStatus } = useVerify();
    const { pathname } = useLocation();
    const [isVerified, setIsVerified] = useState<boolean | null>(false);
    const { setModal } = useModalStore();

    const verifyUser = useCallback(async () => {
        try {
            await checkLoginStatus();
            setIsVerified(true);
        } catch (error) {
            setIsVerified(false);
        }
    }, [checkLoginStatus]);

    useEffect(() => {
        verifyUser();
        setModal(false);
    }, [verifyUser, checkLoginStatus, pathname, setModal]);

    if (!isVerified) {
        return <PageLoading />;
    } else {
        return <Component {...rest} />;
    }
};

export default PrivateRoute;
