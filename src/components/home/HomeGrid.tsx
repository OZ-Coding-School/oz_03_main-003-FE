import { twMerge as tw } from "tailwind-merge";
import { useUserStore } from "../../config/store";
import HomeTree from "./HomeTree";
import { useState } from "react";
import ModalCreateTree from "../common/modal/ModalCreateTree";
import ModalChangeTreeName from "../common/modal/ModalChangeTreeName";
import ModalTreeDetail from "../common/modal/ModalTreeDetail";

const HomeGrid = () => {
    const { userData } = useUserStore();
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [detailModalOpen, setDetailModalOpen] = useState(false);
    const [treeLocation, setTreeLocation] = useState(0);
    const [treeUUID, setTreeUUID] = useState("");

    const createModalCloseHandler = () => {
        setCreateModalOpen(false);
    };

    const editModalCloseHandler = () => {
        setEditModalOpen(false);
    };

    const detailModalCloseHandler = () => {
        setDetailModalOpen(false);
    };

    const createModalOpenHandler = (id: number) => {
        setTreeLocation(id);
        setCreateModalOpen(true);
    };

    const editModalOpenHandler = (id: string) => {
        setTreeUUID(id);
        setEditModalOpen(true);
    };

    const detailModalOpenHandler = (id: string) => {
        setTreeUUID(id);
        setDetailModalOpen(true);
    };

    const isAccessible = (index: number): boolean => {
        return userData.tree.accessibleIndices.includes(index) || false;
    };

    return (
        <>
            <div
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(50deg) rotateZ(45deg)",
                }}
                className={tw(
                    "grid gap-0",
                    userData.level.userLevel > 1 ? "mr-[50px] mb-[30px] mt-[250px]" : "mt-[200px]"
                )}
            >
                <div
                    className="grid text-zero relative z-10"
                    style={{
                        gridTemplateRows: `repeat(5, 1fr)`,
                        gridTemplateColumns: `repeat(5, 1fr)`,
                    }}
                >
                    {Array.from({ length: 25 }).map((_, index) => {
                        const isEnabled = isAccessible(index);
                        return (
                            <div
                                key={"grid" + index}
                                className={tw(
                                    "w-[170px] h-[170px] transition",
                                    isEnabled && "hover:bg-primary hover:opacity-25 cursor-pointer"
                                )}
                                onClick={() => {
                                    if (isEnabled) {
                                        createModalOpenHandler(index);
                                    }
                                }}
                            >
                                {userData.treeDetail.map((item) => {
                                    if (index === item.location) {
                                        return (
                                            <HomeTree
                                                onDetailModal={detailModalOpenHandler}
                                                onEditModal={editModalOpenHandler}
                                                key={item.tree_uuid}
                                                user_level={userData.level.userLevel}
                                                {...item}
                                            />
                                        );
                                    }
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
            {createModalOpen && (
                <ModalCreateTree treeLocation={treeLocation} onClose={createModalCloseHandler} />
            )}
            {editModalOpen && (
                <ModalChangeTreeName treeUUID={treeUUID} onClose={editModalCloseHandler} />
            )}
            {detailModalOpen && (
                <ModalTreeDetail treeUUID={treeUUID} onClose={detailModalCloseHandler} />
            )}
        </>
    );
};

export default HomeGrid;
