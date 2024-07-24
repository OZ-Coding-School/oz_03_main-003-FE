import { twMerge as tw } from "tailwind-merge";
import { useUserStore } from "../../config/store";
import HomeTree from "./HomeTree";
import { useRef, useState } from "react";
import { UserTreeDetail } from "../../config/types";
import ModalCreateTree from "../common/modal/ModalCreateTree";
import ModalChangeTreeName from "../common/modal/ModalChangeTreeName";
import ModalTreeDetail from "../common/modal/ModalTreeDetail";
import { findTreeLocation, moveTreeLocation, swapTreeLocation } from "../../util/utilTreeLocation";
import useInfo from "../../hook/useInfo";
import useVerify from "../../hook/useVerify";

const HomeGrid = () => {
    const { userData } = useUserStore();
    const { getUserGridInfo } = useInfo();
    const { checkLoginStatus } = useVerify();
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [detailModalOpen, setDetailModalOpen] = useState(false);
    const [treeLocation, setTreeLocation] = useState(0);
    const [moveModalOpen, setMoveModalOpen] = useState(false);
    const [treeUUID, setTreeUUID] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

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

    const moveTreeOpenHandler = (id: string) => {
        setTreeUUID(id);
        ref.current?.focus();
        setMoveModalOpen(true);
    };

    const moveTreeControlHandler = async (location: number) => {
        setIsLoading(true);
        const treeDetail = userData.treeDetail as UserTreeDetail[];
        const locationData = findTreeLocation(location, treeUUID, treeDetail);

        if (locationData?.selectId) {
            setMoveModalOpen(false);
            await checkLoginStatus();
            await swapTreeLocation(locationData);
            await getUserGridInfo();
            setIsLoading(false);
        } else {
            setMoveModalOpen(false);
            await checkLoginStatus();
            await moveTreeLocation(locationData);
            await getUserGridInfo();
            setIsLoading(false);
        }
    };

    const isAccessible = (index: number): boolean => {
        return userData.tree.accessibleIndices.includes(index) || false;
    };

    const isOrigin = (index: number) => {
        const nowPath = userData.treeDetail.find(
            (item) => item.tree_uuid === treeUUID
        ) as UserTreeDetail;

        if (index === nowPath?.location) {
            return false;
        }

        return userData.tree.originIndices.includes(index) || false;
    };

    return (
        <>
            <div
                onKeyDown={(e) => {
                    if (e.key === "Escape") setMoveModalOpen(false);
                }}
                ref={ref}
                tabIndex={-1}
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(50deg) rotateZ(45deg)",
                }}
                className={tw(
                    "grid gap-0 outline-none",
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
                        const isEdit = isOrigin(index);
                        return (
                            <div
                                key={"grid" + index}
                                className={tw(
                                    "w-[170px] h-[170px] transition m-[2px]",
                                    !moveModalOpen &&
                                        isEnabled &&
                                        "hover:bg-primary hover:bg-opacity-25 cursor-pointer",
                                    moveModalOpen &&
                                        isEdit &&
                                        "bg-primary bg-opacity-50 animate-pulse cursor-pointer"
                                )}
                                onClick={() => {
                                    if (moveModalOpen && isEdit && !isLoading) {
                                        moveTreeControlHandler(index);
                                    }
                                    if (!moveModalOpen && isEnabled && !isLoading) {
                                        createModalOpenHandler(index);
                                    }
                                }}
                            >
                                {userData.treeDetail.map((item) => {
                                    if (index === item.location) {
                                        return (
                                            <HomeTree
                                                moveState={moveModalOpen}
                                                onMoveModal={moveTreeOpenHandler}
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
