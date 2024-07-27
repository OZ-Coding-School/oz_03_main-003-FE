import AdminUserItem from "./AdminUserItem";

const AdminUser = () => {
    return (
        <div className="text-2xl mt-10 font-mono font-bold">
            <div>User Status</div>
            <div className="w-full min-w-fit max-h-[600px] overflow-y-scroll rounded-md bg-white mb-20 flex">
                <AdminUserItem />
            </div>
        </div>
    );
};

export default AdminUser;
