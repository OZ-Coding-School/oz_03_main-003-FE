import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageLoading from "../pages/PageLoading";
import useVerify from "../hook/useVerify";

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

    useEffect(() => {
        const verifyUser = async () => {
            try {
                await checkLoginStatus();
                setIsVerified(true);
            } catch (error) {
                setIsVerified(false);
            }
        };

        verifyUser();
    }, [checkLoginStatus, pathname]);

    if (!isVerified) {
        return <PageLoading />;
    } else {
        return <Component {...rest} />;
    }
};

export default PrivateRoute;
