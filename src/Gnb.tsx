import { Link, useLocation } from "react-router-dom";
import { IconChat, IconHome, IconUser } from "./IconData";
import { twMerge as tw } from "tailwind-merge";

const Gnb = () => {
    const location = useLocation();

    const isActive = (path: string): boolean => location.pathname === path;

    const navItems = [
        { path: "/home", label: "감정나무 숲", icon: IconHome },
        { path: "/chat", label: "대화 분석", icon: IconChat },
        { path: "/mypage", label: "내 정보", icon: IconUser },
    ];

    return (
        <ul className="font-title leading-[48px] flex bg-black text-gray-200 text-center items-center transition">
            {navItems.map((item) => {
                const IconComponent = item.icon;
                const active = isActive(item.path);

                return (
                    <li
                        key={item.path}
                        className={tw(
                            "relative w-36 flex justify-center group",
                            active
                                ? "text-primary bg-gray-800"
                                : "hover:text-white hover:bg-gray-800"
                        )}
                    >
                        <Link to={item.path} className="flex items-center">
                            <IconComponent
                                className={tw(
                                    "w-5 h-5 mr-[5px]",
                                    active
                                        ? "fill-primary group-hover:fill-primary"
                                        : "fill-gray-400 group-hover:fill-white"
                                )}
                                fill={active ? "#83DF00" : "#bebebe"}
                            />
                            {item.label}
                            {active && (
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary" />
                            )}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Gnb;
