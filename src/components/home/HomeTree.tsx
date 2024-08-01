import { useState } from "react";
import { twMerge as tw } from "tailwind-merge";

import { TREE_IMG, TREE_STYLE_LV1, TREE_STYLE_LV2, TREE_TYPE } from "../../config/const";
import ModalGridSetting from "../common/modal/ModalGridSetting";
import HomeTreeDescription from "./HomeTreeDescription";

interface HomeTreeProps {
    tree_uuid: string;
    tree_name: string;
    user_level: number;
    tree_level: number;
    location: number;
    moveState: boolean;
    onEditModal: (id: string) => void;
    onDetailModal: (id: string) => void;
    onMoveModal: (id: string) => void;
    onDeleteModal: (id: string) => void;
}

const HomeTree = ({
    tree_uuid,
    tree_name,
    user_level,
    tree_level,
    location,
    onEditModal,
    onDetailModal,
    onMoveModal,
    onDeleteModal,
    moveState,
}: HomeTreeProps) => {
    const nowLevel = user_level >= 2 ? true : false;
    const [hover, setHover] = useState(false);

    return (
        <div
            id={tree_uuid}
            style={{
                transform: "skewX(45deg) skewY(-27deg) scaleY(0.95) scale(1.5) translateY(-20px)",
            }}
            className={tw(
                "relative origin-center bottom-20 flex justify-center items-center",
                "text-xl text-white z-10",
                nowLevel ? TREE_STYLE_LV2[location] : TREE_STYLE_LV1[location]
            )}
        >
            <img className="select-none object-cover" src={TREE_IMG[tree_level]} />

            <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="w-2/3 h-full absolute z-20 flex justify-center items-end"
            >
                {!moveState && (
                    <>
                        {hover && (
                            <>
                                <HomeTreeDescription
                                    treeName={tree_name}
                                    treeType={TREE_TYPE[tree_level]}
                                />
                                <ModalGridSetting
                                    onDetailModal={onDetailModal}
                                    onEditModal={onEditModal}
                                    onMoveModal={onMoveModal}
                                    onDeleteModal={onDeleteModal}
                                    tree_uuid={tree_uuid}
                                />
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default HomeTree;
