import React from "react";

const HeaderLoggedOut: React.FC = () => {
    return (
        <header className="fixed w-full z-30">
            <div className="h-20 p-5 w-full bg-black flex text-white justify-between">
                <img src="/logo-white.png" alt="Logo" className="h-10" />
                <button className="login-button">로그인</button>
            </div>
        </header>
    );
};

export default HeaderLoggedOut;
