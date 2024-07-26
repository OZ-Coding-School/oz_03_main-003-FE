import { FormData } from "../../config/types";
import AdminTreeItem from "./AdminTreeItem";

interface AdminTreeProps {
    data: FormData;
}

const AdminTree = ({ data }: AdminTreeProps) => {
    return (
        <div className="text-2xl mt-10 font-mono font-bold">
            <div>Tree Status</div>
            <div className="w-full max-h-[600px] overflow-y-scroll rounded-md bg-white mb-20">
                <AdminTreeItem data={data} />
            </div>
        </div>
    );
};

export default AdminTree;
