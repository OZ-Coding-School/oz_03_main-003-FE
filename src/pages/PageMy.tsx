import HeaderLoggedIn from "../components/header/HeaderLoggedIn";

const PageMy = () => {
    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="text-white">PageMy</div>
            </div>
        </>
    );
};

export default PageMy;
