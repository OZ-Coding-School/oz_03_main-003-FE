import { FormData } from "../../config/types";
import AdminStatusItem from "./AdminStatusItem";

interface AdminOverViewProps {
    data: FormData;
}
const AdminStatus = ({ data }: AdminOverViewProps) => {
    return (
        <div className="text-2xl font-mono font-bold">
            <div>User Status</div>
            <div className="w-full h-fit overflow-y-scroll rounded-md bg-white mb-20">
                <AdminStatusItem data={data} />
            </div>
        </div>
    );
};

export default AdminStatus;
