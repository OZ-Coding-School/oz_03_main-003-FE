import AdminEmotionItem from "./AdminEmotionItem";

const AdminEmotion = () => {
    return (
        <div className="text-2xl mt-10 font-mono font-bold">
            <div>Emotion Status</div>
            <div className="w-full min-w-fit max-h-[600px] overflow-y-scroll rounded-md bg-white mb-20 flex">
                <AdminEmotionItem />
            </div>
        </div>
    );
};

export default AdminEmotion;
