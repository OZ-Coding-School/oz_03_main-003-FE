import AdminForestItem from "./AdminForestItem";

const AdminForest = () => {
    return (
        <div className="text-2xl mt-10 font-mono font-bold">
            <div>Forest Status</div>
            <div className="w-fit max-h-[600px] overflow-y-scroll rounded-md bg-white mb-20">
                <AdminForestItem />
            </div>
        </div>
    );
};

export default AdminForest;
