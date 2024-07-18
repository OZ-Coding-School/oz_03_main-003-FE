import { useCallback, useState } from "react";
import Cookies from "js-cookie";
const useCookie = () => {
    const [isLoading, setIsLoading] = useState(false);

    const verifyCookie = useCallback(() => {
        setIsLoading(true);

        const access = Cookies.get("access");
        const refresh = Cookies.get("refresh");

        if (access && refresh) {
            setIsLoading(false);
            return true;
        } else {
            setIsLoading(false);
            return false;
        }
    }, []);

    return { isLoading, verifyCookie };
};

export default useCookie;
