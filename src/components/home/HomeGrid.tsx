import { twMerge as tw } from "tailwind-merge";
import { useUserStore } from "../../config/store";

interface HomeGridProps {
    onCreateTreeModal: (id: number) => void;
}

const HomeGrid = ({ onCreateTreeModal }: HomeGridProps) => {
    const { userData } = useUserStore();

    const handleClick = (id: number) => {
        //TODO: 나무 생성이 가능해지면 추가해야 함
        onCreateTreeModal(id);
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
                                key={index}
                                className={tw(
                                    "w-[170px] h-[170px] transition",
                                    isEnabled && "hover:bg-primary hover:opacity-25 cursor-pointer"
                                )}
                                onClick={() => {
                                    if (isEnabled) {
                                        handleClick(index);
                                    }
                                }}
                            >
                                {userData.treeDetail.map((item) => {
                                    if (index === item.location) {
                                        return (
                                            <div
                                                style={{
                                                    transform: "skewX(45deg) skewY(-27deg)",
                                                }}
                                                className={tw(
                                                    "w-[300px] h-[300px] flex relative origin-center bottom-20",
                                                    "text-xl text-white z-10"
                                                )}
                                            >
                                                <img
                                                    className="object-cover"
                                                    src="/img/tree-0.png"
                                                />
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default HomeGrid;
