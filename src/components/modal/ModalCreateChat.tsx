import ButtonDefault from "../button/ButtonDefault";
import { IconClose, IconSelectArrow } from "../../IconData";
import { ContentDummy } from "./ModalContentDummy";
import ModalListItem from "./ModalListItem";
import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";

const ModalCreateChat = () => {
    const [hover, setHover] = useState(false);

    return (
        <div className={tw("p-5 bg-gray-800 text-white w-80", "relative border border-gray-600")}>
            <h3 className="font-title leading-5 text-gray-200">대화 분석방 생성</h3>
            <input
                type="text"
                placeholder="이름을 지어주세요."
                className={tw(
                    "mt-6 border-b outline-none border-gray-600",
                    "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white"
                )}
            ></input>
            <h3 className="font-title leading-5 mb-4 mt-6 text-gray-200">함께할 나무 선택</h3>
            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="relative"
            >
                <div
                    className={tw(
                        "py-3 px-4 bg-gray-600 hover:bg-gray-400",
                        "fill-white flex items-center justify-between select-none cursor-default"
                    )}
                >
                    나무를 선택해 주세요.
                    <IconSelectArrow
                        className={`w-4 transition-transform duration-300 ${hover ? "transform rotate-180" : ""}`}
                    />
                </div>
                {hover && (
                    <div className="absolute left-0 top-13 right-0 z-10 cursor-pointer">
                        {ContentDummy.map((item, index) => (
                            <ModalListItem key={index} item={item} />
                        ))}
                    </div>
                )}
            </div>
            <div className="text-right mt-4">
                <ButtonDefault className="ml-1">생성하기</ButtonDefault>
            </div>
            <button
                type="button"
                className="text-zero w-5 h-5 absolute right-5 top-5 fill-gray-600 hover:fill-white transition"
            >
                <IconClose />
                닫기
            </button>
        </div>
    );
};

export default ModalCreateChat;
