import HeaderLoggedIn from "../components/header/HeaderLoggedIn";
import UserInfoMypage from "../components/userInfo/UserInfoMypage";

const PageMy = () => {
    


    return (
        <>
            <HeaderLoggedIn />
            <div className="bg-black pt-[129px] w-full h-screen box-border">
                <div className="text-white flex justify-center items-center">
                    <UserInfoMypage />
                </div>
            </div>
        </>
    );
};

export default PageMy;
