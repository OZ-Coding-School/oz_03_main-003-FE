import { treeApi } from "../api";
import { UserTreeDetail } from "../config/types";

interface LocationData {
    nowId: string;
    nowLocation: number;
    selectLocation: number;
}

interface SwapLocationData extends LocationData {
    selectId: string;
}

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

export const moveTreeLocation = async (data: LocationData) => {
    const requestForm = {
        location: data.selectLocation,
    };
    await treeApi.updateTree(data.nowId, requestForm);
};
