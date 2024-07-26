import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageLoading from "../pages/PageLoading";
import useVerify from "../hook/useVerify";
import { useModalStore, useUserStore } from "../config/store";

interface DefaultProps {
    [key: string]: unknown;
}

interface PrivateRouteProps {
    element: React.ComponentType<DefaultProps>;
    [key: string]: unknown;
}

const AdminRoute: React.FC<PrivateRouteProps> = ({ element: Component, ...rest }) => {
    const { checkLoginStatus } = useVerify();
    const { pathname } = useLocation();
    const [isVerified, setIsVerified] = useState<boolean | null>(false);
    const { setModal } = useModalStore();
    const { userData } = useUserStore();
    const nav = useNavigate();

    const verifyUser = useCallback(async () => {
        try {
            await checkLoginStatus();
            if (userData.user.admin) {
                setIsVerified(true);
            } else {
                setIsVerified(false);
                nav("/", { replace: true });
            }
        } catch (error) {
            setIsVerified(false);
        }
    }, [checkLoginStatus, userData.user.admin, nav]);

    useEffect(() => {
        verifyUser();
        setModal(false);
    }, [verifyUser, checkLoginStatus, pathname, setModal]);

    if (!isVerified) {
        return <PageLoading />;
    } else {
        return (
            <div className="Page_wrapper">
                <Component {...rest} />
            </div>
        );
    }
};

export default AdminRoute;
