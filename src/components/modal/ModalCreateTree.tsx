import ButtonDefault from "../button/ButtonDefault";
import { IconClose } from "../../IconData";

const ModalCreateTree = () => {
    return (
        <div className="p-5 bg-gray-800 text-white max-w-80	w-full relative">
            <h3 className="font-title leading-5">새 나무 심기</h3>
            <input
                type="text"
                placeholder="이름을 지어주세요."
                className="mt-6 border-b outline-none border-gray-600 h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white"
            ></input>
            <div className="text-right mt-4">
                <ButtonDefault className="ml-1">나무 심기</ButtonDefault>
            </div>
            <button type="button" className="text-zero w-5 h-5 absolute right-5 top-5">
                <IconClose fill="#393939" />
                닫기
            </button>
        </div>
    );
};

export default ModalCreateTree;
