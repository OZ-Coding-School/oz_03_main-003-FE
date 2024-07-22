import { useCallback, useState } from "react";
import { useUserStore } from "../config/store";
import dayjs from "dayjs";
import { authApi, forestApi } from "../api";
import { calculateForest } from "../util/UtilLevel";

/**
 * @description 사용자 정보를 불러오는 커스텀 훅입니다. 비동기이므로 로딩 상태도 제공합니다.
 * @returns getUserInfo: uuid / profile_image / username / email
 * @returns getUserLevelInfo: level / experience / treeCurrent / treeMax / gridSize / accessibleIndices
 * @returns isLoading: 현재 데이터 로딩중일 경우 true/false로 알려줍니다.
 */
const useUserInfo = () => {
    const { setUserData, setLevelData } = useUserStore();
    const [isLoading, setIsLoading] = useState(true);

    const getUserInfo = useCallback(async () => {
        setIsLoading(true);
        const { data: accountResponse } = await authApi.getUserInfo();

        setUserData({
            id: accountResponse.uuid,
            imgUrl: accountResponse.profile_image,
            username: accountResponse.username,
            email: accountResponse.email,
            created_at: dayjs(accountResponse.created_at).format("YYYY-MM-DD"),
        });
        setIsLoading(false);
    }, [setUserData]);

    const getUserLevelInfo = useCallback(async () => {
        setIsLoading(true);
        const { data: forestResponse } = await forestApi.getForestData();

        //TODO : 경험치 데이터가 넘어오면 레벨업 시스템 제작
        //TODO: CalculateForest에서 레벨, 경험치데이터를 토대로 숲 레벨 변경해야함
        //? 1. 숲 레벨 정보를 받음
        //? 2. 트리 정보에서 전체 이모션 데이터 값을 추출
        //? 3. 현재 레벨과 비교하여 경험치 계산
        //? 4. 경험치 100%+ 일경우 헤당 값만큼 경험치를 이관하고 숲 레벨 증가
        //? 5. 변경된 레벨 데이터를 calculateForest에 넘겨줘야함, api 호출

        //? 레벨업 데이터 -> 문제 없이 반영
        //? 숲 경험치는 구현이 될거같은데
        //? 생각해보니까 나무경험치도 있잖아
        //? 사용자 나무 위치 데이터 -> 문제없이 이 데이터 안에 포함하면 됨
        //? 사용자 나무 형태 데이터 -> treeLevel, treeLevel의 코드값을 통해서 구별 가능
        //? 사용자 나무 디테일 데이터 -> treeUUId로 조회만 하면 끝임

        //? 채팅 CRUD, 그냥 사용자가 AI한테 메세지를 전달하고, AI메세지인지, 사용자 메세지인지에 따라
        //? UI보여주고, 각 데이터의 상태에따라, badge를 보여주고 그래프를 보여줘 사용자에게 통계제공
        //? 채팅방 CRUD, 나무 데이터를 가져와서, 나무와의 동기화, EDIT, DELETE, NEW
        //? 기한에 문제없이 개발이 될떄까진 터치X

        const levelData = calculateForest(forestResponse.forest_level);

        setLevelData({
            userLevel: levelData.userLevel,
            userExperience: levelData.experience,
            treeMax: levelData.treeMax,
            treeCurrent: levelData.treeCurrent,
            gridSize: levelData.gridSize,
            accessibleIndices: levelData.accessibleIndices,
            forest_UUID: forestResponse.forest_uuid,
        });
        setIsLoading(false);
    }, [setLevelData]);

    return {
        getUserInfo,
        isLoading,
        getUserLevelInfo,
    };
};

export default useUserInfo;
