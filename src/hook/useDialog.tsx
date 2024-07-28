import useFetchAIMessage from "./useFetchAIMessage";
import useSendMessage from "./useSendMessage";
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
