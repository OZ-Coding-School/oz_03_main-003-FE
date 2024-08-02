import { useEffect } from "react";
import DialogHeader from "./DialogHeader";
import InputMessage from "./InputMessage";
import useInitDialog from "../../../hook/useInitDialog";
import useVerify from "../../../hook/useVerify";
import DialogRoom from "./DialogRoom";
import { twMerge as tw } from "tailwind-merge";
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
        <div
            className={tw(
                "h-full transition-all w-full flex flex-col border-l border-r border-gray-600 overflow-hidden bg-black",
                "absolute bottom-0 left-0",
                "lg:mx-auto lg:max-w-[800px] md:static",
                "md:static"
            )}
        >
            <DialogHeader onClose={onClose} />
            <DialogRoom />
            <InputMessage />
        </div>
    );
};

export default Dialog;
