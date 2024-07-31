import { Link } from "react-router-dom";

const HomeCopyright = () => {
    return (
        <div>
            <p className="text-gray-400 font-[14px] font-title mb-[17px]">
                ©
                <Link
                    to="https://github.com/OZ-Coding-School/oz_03_main-003-FE"
                    className="underline"
                    target="_blank"
                >
                    Copyright
                </Link>
                &nbsp;for ungpyolee All rights reserved
            </p>
        </div>
    );
};

export default HomeCopyright;
