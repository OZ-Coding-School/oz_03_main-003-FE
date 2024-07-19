import ButtonDefault from "../button/ButtonDefault";
import { IconClose } from "../../config/IconData";
import { twMerge as tw } from "tailwind-merge";

const ModalChangeLocation = () => {
    return (
        <div className={tw("p-5 bg-gray-800 text-white w-80", "relative border border-gray-600")}>
            <h3 className="font-title leading-5 text-gray-200">위치를 변경합니다</h3>
            <div className="text-right mt-4">
                <ButtonDefault className="ml-1">변경하기</ButtonDefault>
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

export default ModalChangeLocation;
