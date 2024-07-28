import { treeApi } from "../api";
import { UserTreeDetail } from "../config/types";
import { SwapLocationData, LocationData } from "../config/types";

//? 사용자가 트리를 옮길때 트리의 위치정보를 전달합니다.
//? ID, Location정보를 현재 트리와 사용자가 인터랙션한 위치를 전달합니다.
export const findTreeLocation = (
    location: number,
    treeUUID: string,
    treeDetail: UserTreeDetail[]
) => {
    const nowId = treeUUID;
    const nowItem = treeDetail.find((item) => item.tree_uuid === nowId) as UserTreeDetail;
    const selectLocation = location;
    const selectItem = treeDetail.find(
        (item) => item.location === selectLocation
    ) as UserTreeDetail;

    if (!selectItem) {
        return {
            nowId: nowId,
            nowLocation: nowItem.location,
            selectLocation: selectLocation,
        };
    } else {
        return {
            nowId: nowId,
            nowLocation: nowItem.location,
            selectId: selectItem.tree_uuid,
            selectLocation: selectLocation,
        };
    }
};

//? 사용자의 나무위치를 변경합니다. (나무 <-> 나무)
//? 나무간의 위치정보를 비교하여 위치를 업데이트합니다.
export const swapTreeLocation = async (data: SwapLocationData) => {
    const requestFormNowLocation = {
        location: data.nowLocation,
    };
    const requestFormSelectLocation = {
        location: data.selectLocation,
    };
    await treeApi.updateTree(data.nowId, requestFormSelectLocation);
    await treeApi.updateTree(data.selectId, requestFormNowLocation);
};

//? 사용자의 나무위치를 변경합니다. (나무 <-> 빈칸)
export const moveTreeLocation = async (data: LocationData) => {
    const requestForm = {
        location: data.selectLocation,
    };
    await treeApi.updateTree(data.nowId, requestForm);
};
