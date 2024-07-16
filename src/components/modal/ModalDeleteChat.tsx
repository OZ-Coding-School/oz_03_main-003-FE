import React from "react";
import ButtonDefault from "../button/ButtonDefault";
import ButtonError from "../button/ButtonError";
import { IconClose } from "../../IconData";

const ModalDeleteChat = () => {
    return (
        <div className="p-5 bg-gray-800 text-white max-w-80	w-full relative">
            <h3 className="font-title leading-5 mb-4">대화 분석방 삭제</h3>
            <p>대화 분석방을 삭제하시겠습니까?</p>
            <p className="text-literal-error text-xs">삭제 된 내용은 복구되지 않습니다</p>
            <div className="text-right mt-2.5">
                <ButtonError>삭제하기</ButtonError>
                <ButtonDefault className="ml-1">취소하기</ButtonDefault>
            </div>
            <button type="button" className="text-zero w-5 h-5 absolute right-5 top-5">
                <IconClose fill="#393939" />
                닫기
            </button>
        </div>
    );
};

export default ModalDeleteChat;
