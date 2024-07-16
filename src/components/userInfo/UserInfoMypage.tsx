import React, { useState } from "react";
import { UserInfoData, UserInfoDummy } from "./UserInfoDummy";
import { IconUpdate } from "../../IconData";
import { twMerge as tw } from "tailwind-merge";

const UserInfoMypage = () => {
    const [data, setData] = useState<UserInfoData>(UserInfoDummy);

    return (
        <div className="bg-gray-800 text-white">
            <div className="flex p-5 pb-6 border-b border-gray-600">
                <div className="relative w-12 h-12 border border-white rounded-full mr-[10px]">
                    <img
                        src={data.imgUrl}
                        alt={data.name}
                        className="w-full h-full object-cover rounded-full"
                    />
                    <div className="w-6 h-6 absolute bottom-[-6px] right-[-6px] border border-primary rounded-full bg-gray-800 text-center text-sm">
                        00
                    </div>
                </div>
                <div className="w-full flex flex-col justify-end">
                    <p className="font-title text-lg">{data.name}</p>
                    <div className="rounded-sm border h-2">
                        <div
                            className="bg-primary h-full animate-width"
                            style={{ "--target-width": `${data.growth}%` } as React.CSSProperties}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="p-5">
                <div className="flex items-center mb-2">
                    <p className="font-title text-gray-200 mr-2">user Information</p>
                    <div
                        className={tw(
                            "w-8 h-8 rounded-full flex justify-center items-center",
                            "fill-white hover:bg-gray-600",
                            "cursor-pointer transition"
                        )}
                    >
                        <IconUpdate className="h-4" />
                    </div>
                </div>
                <div className="flex">
                    <ul className="w-20 text-gray-200">
                        <li className="mb-3">nickName</li>
                        <li className="mb-3">email</li>
                        <li className="mb-3">join data</li>
                        <li className="mb-3">tree</li>
                        <li className="mb-3">grid size</li>
                    </ul>
                    <ul>
                        <li className="mb-3">: {data.name}</li>
                        <li className="mb-3">: {data.email}</li>
                        <li className="mb-3">: {data.joinDate}</li>
                        <li className="mb-3">
                            : {data.treeCurrent} / {data.treeMax}
                        </li>
                        <li className="mb-3">
                            : {data.gridSize} * {data.gridSize}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserInfoMypage;
