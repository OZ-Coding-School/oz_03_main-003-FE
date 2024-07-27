import useUser from "./useUser";
import useUserLevel from "./useUserLevel";
import useUserGrid from "./useUserGrid";

/**
 * @description 사용자 정보를 불러오는 커스텀 훅입니다. 비동기 await으로 호출해야합니다.
 * @returns getUserInfo: uuid / profile_image / username / email
 * @returns getUserLevelInfo: level / experience
 * @returns getUserGridInfo: treeCurrent / treeMax / gridSize / accessibleIndices등 전체 데이터
 */
const useInfo = () => {
    const { getUserInfo } = useUser();
    const { getUserLevelInfo } = useUserLevel();
    const { getUserGridInfo } = useUserGrid();

    return {
        getUserInfo,
        getUserGridInfo,
        getUserLevelInfo,
    };
};

export default useInfo;
