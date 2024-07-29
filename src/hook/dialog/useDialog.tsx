import useFetchAIMessage from "../message/useFetchAIMessage";
import useSendMessage from "../message/useSendMessage";
import useUpdateDialog from "./useUpdateDialog";
const useDialog = () => {
    const { sendMessage } = useSendMessage();
    const { fetchAIMessage } = useFetchAIMessage();
    const { updateDialog, isAILoading } = useUpdateDialog();
    return {
        sendMessage,
        fetchAIMessage,
        updateDialog,
        isAILoading,
    };
};
export default useDialog;
