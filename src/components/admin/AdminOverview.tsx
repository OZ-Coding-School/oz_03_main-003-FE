import { useAdminStore } from "../../config/store";

const AdminOverview = () => {
    const { data } = useAdminStore();
    const totalEmotions = data.emotion.reduce((acc, curr) => {
        const objectSum = Object.values(curr.emotions).reduce((sum, value) => {
            return sum + Number(value);
        }, 0);

        return acc + objectSum;
    }, 0);
    return (
        <>
            <div className="text-3xl font-mono font-bold text-center mb-4">Overview</div>

            <div className="text-2xl select-none font-mono font-bold w-full flex justify-center gap-10">
                <div className="w-fit bg-white rounded-md p-4 flex flex-col justify-center items-center">
                    <div>Total Users</div>
                    <div>{data.user.length}</div>
                </div>
                <div className="w-fit bg-white rounded-md p-4 flex flex-col justify-center items-center">
                    <div>Total Trees</div>
                    <div>{data.tree.length}</div>
                </div>
                <div className="w-fit bg-white rounded-md p-4 flex flex-col justify-center items-center">
                    <div>Total Emotions</div>
                    <div>{totalEmotions}</div>
                </div>
            </div>
        </>
    );
};

export default AdminOverview;
