import { twMerge as tw } from "tailwind-merge";

import UserInfoHome from "../common/userInfo/UserInfoHome";
import HomeBackground from "./HomeBackground";
import HomeGrid from "./HomeGrid";
import HomeDescription from "./HomeDescription";
const HomeMain = () => {
    return (
        <div className="fixed w-full h-full">
            <UserInfoHome />

            <main className={tw("flex bg-cover items-center justify-center h-screen")}>
                <div className="w-full animate-blur relative flex items-center justify-center h-full bg-cover">
                    <HomeBackground />
                    <HomeGrid />
                </div>
            </main>

            <HomeDescription />
        </div>
    );
};

export default HomeMain;
