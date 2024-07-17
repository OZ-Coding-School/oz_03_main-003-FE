import React from "react";

const HeaderLoggedOut: React.FC = () => {
    return (
        <div className="h-20 p-5 w-full bg-black flex text-white justify-between">
            <img src="/logo-white.png" alt="Logo" className="h-10" />
            <button className="login-button">로그인</button>
        </div>
    );
};

export default HeaderLoggedOut;
