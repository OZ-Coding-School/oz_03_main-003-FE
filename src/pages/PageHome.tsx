import HeaderLoggedIn from "../components/header/HeaderLoggedIn";
const PageHome = () => {
    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="text-white">PageHome</div>
            </div>
        </>
    );
};

export default PageHome;
