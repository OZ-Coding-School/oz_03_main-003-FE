import React, { useEffect, useRef, useState } from "react";
import ButtonDefault from "../button/ButtonDefault";
import { IconClose } from "../../../config/IconData";
import { twMerge as tw } from "tailwind-merge";
import { motion } from "framer-motion";
import { treeApi } from "../../../api";
import useVerify from "../../../hook/useVerify";
import { TreeFormData } from "../../../config/types";
import useInfo from "../../../hook/useInfo";

interface ModalCreateTreeProps {
    treeLocation: number;
    onClose: () => void;
}

const ModalCreateTree = ({ onClose, treeLocation }: ModalCreateTreeProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [treeName, setTreeName] = useState("");
    const [treeNameAlert, setTreeNameAlert] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { getUserGridInfo } = useInfo();

    const { checkLoginStatus } = useVerify();
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const closeHandler = () => {
        onClose();
    };

    const updateTreeHandler = async (uuid: string) => {
        const treeForm: TreeFormData = {
            tree_name: treeName,
            tree_level: 0,
            location: treeLocation,
        };
        await treeApi.updateTree(uuid, treeForm);
        await getUserGridInfo();
        setTreeName("");
        closeHandler();
    };

    const createTreeHandler = async () => {
        if (treeName.trim() === "") {
            inputRef.current?.focus();
            return setTreeNameAlert(true);
        }
        if (!isLoading) {
            setIsLoading(true);
            await checkLoginStatus();
            const { data: createTreeResponse } = await treeApi.createTree();
            await updateTreeHandler(createTreeResponse.tree_uuid);
            setIsLoading(false);
        }
    };

    const treeNameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTreeNameAlert(false);
        setTreeName(e.currentTarget.value);
    };

    return (
        <>
            <nav className="absolute opacity-50 top-0 w-full h-screen bg-black"></nav>

            <motion.div
                animate={{ opacity: [0, 1], scale: [0, 1] }}
                transition={{ duration: 0.5, type: "spring" }}
                onClick={closeHandler}
                onKeyDown={(e) => {
                    e.key === "Escape" && closeHandler();
                    e.key === "Enter" && createTreeHandler();
                }}
                className={tw("inset-0 select-none z-0 fixed flex items-center justify-center")}
            >
                <nav
                    onClick={stopPropagation}
                    className={tw(
                        "p-5 bg-gray-800 text-white w-[420px] border border-gray-600",
                        "absolute z-20"
                    )}
                >
                    <h3 className="font-title leading-5 text-gray-200 mb-10">새 나무 심기</h3>
                    <input
                        ref={inputRef}
                        onChange={treeNameInputHandler}
                        maxLength={10}
                        value={treeName}
                        type="text"
                        placeholder="이름을 지어주세요."
                        className={tw(
                            "border-b outline-none border-gray-600",
                            "h-10 w-full bg-gray-800 placeholder:text-gray-600 focus:border-white",
                            treeNameAlert && "border-literal-error focus:border-literal-error"
                        )}
                    ></input>
                    <p
                        className={tw(
                            "text-literal-error animate-blur text-sm mt-1",
                            !treeNameAlert && "invisible"
                        )}
                    >
                        1글자 이상 작성해 주세요.
                    </p>
                    <div className="text-right mt-8">
                        <ButtonDefault onClick={createTreeHandler} className="ml-1">
                            나무 심기
                        </ButtonDefault>
                    </div>
                    <button
                        type="button"
                        className="text-zero w-5 h-5 absolute right-5 top-5 fill-gray-600 hover:fill-white transition"
                        onClick={onClose}
                    >
                        <IconClose />
                        닫기
                    </button>
                </nav>
            </motion.div>
        </>
    );
};

export default ModalCreateTree;
