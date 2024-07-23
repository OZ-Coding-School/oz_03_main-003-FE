import { twMerge as tw } from "tailwind-merge";
import { useUserStore } from "../../config/store";

const HomeBackground = () => {
    const { userData } = useUserStore();

    return (
        <>
            <img
                src="/img/grid-background.webp"
                alt="gird-background"
                className="select-none absolute animate-blur w-full h-screen bg-cover"
            ></img>
            <img
                alt="grid-cover"
                src="/img/grid-cover.webp"
                className="select-none absolute animate-blur w-full h-screen bg-cover"
            ></img>
            <img
                alt="grid-userLevel"
                className={tw(
                    "absolute select-none z-0 bg-cover flex justify-center items-center mr-10",
                    userData.level.userLevel > 1
                        ? "w-[900px] h-[710px] mt-[400px]"
                        : "w-[600px] h-[535px] mt-[200px]"
                )}
                src={userData.level.userLevel > 1 ? "/img/grid-lv2.webp" : "/img/grid-lv1.webp"}
            ></img>
        </>
    );
};

export default HomeBackground;
