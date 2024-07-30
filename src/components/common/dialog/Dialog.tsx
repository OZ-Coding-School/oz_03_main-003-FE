import { useEffect } from "react";
import DialogHeader from "./DialogHeader";
import InputMessage from "./InputMessage";
import useInitDialog from "../../../hook/useInitDialog";
import useVerify from "../../../hook/useVerify";
import DialogRoom from "./DialogRoom";
interface DialogProps {
    onClose: () => void;
}
const Dialog = ({ onClose }: DialogProps) => {
    const { initDialogList } = useInitDialog();
    const { checkLoginStatus } = useVerify();

    useEffect(() => {
        const initDialog = async () => {
            try {
                await checkLoginStatus();
                await initDialogList();
            } catch (error) {
                console.error("INIT DATA FAILED", error);
            }
        };
        initDialog();
    }, [initDialogList, checkLoginStatus]);

    return (
        <div className="h-full w-[800px] mx-auto flex flex-col border-l border-r border-gray-600 overflow-hidden">
            <DialogHeader onClose={onClose} />
            <DialogRoom />
            <InputMessage />
        </div>
    );
};

export default Dialog;
