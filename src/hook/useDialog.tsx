import useFetchMessages from "./useFetchMessage";
import useSendMessage from "./useSendMessage";

const useDialog = () => {
    const { fetchMessages } = useFetchMessages();
    const { sendMessage } = useSendMessage();
    return {
        sendMessage,
        fetchMessages,
    };
};
export default useDialog;
