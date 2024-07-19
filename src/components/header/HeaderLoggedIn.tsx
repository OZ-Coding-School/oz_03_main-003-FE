import _React, { useState, useEffect, useRef } from "react";
import { UserInfoDummy, UserInfoData } from "../userInfo/UserInfoDummy";
import HeaderUserMenu from "./HeaderUserMenu";
import Gnb from "../Gnb";

const HeaderLoggedIn = () => {
    const [data, _setData] = useState<UserInfoData>(UserInfoDummy);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed w-full z-30">
            <div className="h-20 p-5 w-full bg-black flex text-white justify-between">
                <img src="/logo-white.png" alt="Logo" className="h-10" />
                <div
                    className="relative w-10 h-10 border border-white rounded-full z-10"
                    ref={menuRef}
                    onClick={toggleMenu}
                >
                    <img
                        src={data.imgUrl}
                        alt="User Icon"
                        className="w-full h-full object-cover rounded-full cursor-pointer"
                    />
                    <div className="absolute right-0 top-12">
                        {isMenuOpen && <HeaderUserMenu />}
                    </div>
                </div>
            </div>
            <Gnb />
        </header>
    );
};

export default HeaderLoggedIn;
