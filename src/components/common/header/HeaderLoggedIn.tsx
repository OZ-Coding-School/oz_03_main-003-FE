import _React, { useState, useEffect, useRef } from "react";
import HeaderUserMenu from "./HeaderUserMenu";
import Gnb from "../../Gnb";
import { useMusicStore, useUserStore } from "../../../config/store";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import soundCollapse from "../../../assets/sound/btn_collapse.mp3";
import soundMusic from "../../../assets/sound/music_loop.mp3";
import { IconPause, IconPlay } from "../../../config/IconData";
import { motion } from "framer-motion";

const HeaderLoggedIn = () => {
    const { userData } = useUserStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [playCollapse] = useSound(soundCollapse, { volume: 0.5 });
    const { play, setPlay } = useMusicStore();
    const menuRef = useRef<HTMLDivElement>(null);
    const nav = useNavigate();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const audio = new Audio(soundMusic);
        audio.loop = true;
        audio.volume = 0.25;
        audioRef.current = audio;
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        playCollapse();
    };

    const musicHandler = () => {
        if (play) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setPlay();
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
            <div className="h-20 p-5 w-full bg-black flex text-white">
                <div className="flex-grow">
                    <img
                        onClick={() => nav("/home")}
                        src="/logo-primary.png"
                        alt="Logo"
                        className="h-10 cursor-pointer"
                    />
                </div>
                <motion.div
                    onClick={musicHandler}
                    initial={{ scale: 1 }}
                    whileTap={{ scale: [1.25, 1.15] }}
                    whileHover={{ scale: [1, 1.25] }}
                    className="w-fit mr-8 cursor-pointer flex justify-center items-center relative"
                >
                    {!play && <IconPlay className="w-4 h-4 fill-white absolute top-3" />}
                    {play && <IconPause className="w-5 h-5 fill-white absolute top-[11px]" />}
                </motion.div>
                <div
                    className="relative w-10 h-10 border border-white rounded-full z-10"
                    ref={menuRef}
                    onClick={toggleMenu}
                >
                    <img
                        src={userData.user.imgUrl || "img/profile-placeholder.png"}
                        alt="User Icon"
                        className="w-full h-full object-cover rounded-full cursor-pointer"
                    />
                    <div className="absolute right-0 top-12">
                        {isMenuOpen && <HeaderUserMenu isAdmin={userData.user.admin} />}
                    </div>
                </div>
            </div>
            <Gnb />
        </header>
    );
};

export default HeaderLoggedIn;
