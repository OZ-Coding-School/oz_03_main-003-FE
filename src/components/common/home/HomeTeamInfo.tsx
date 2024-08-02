import { Link } from "react-router-dom";
import { IconBlog, IconGithub } from "../../../config/IconData";

const HomeTeamInfo = () => {
    return (
        <div>
            <div className="text-white flex text-center m-auto break-keep sm:max-w-[1200px] w-full flex-col sm:flex-row">
                <dl className="sm:w-60 w-full relative">
                    <dt>
                        <p className="block text-sm font-medium text-literal-angry">
                            Team & FE Leader
                        </p>
                        Kim, Min Su
                    </dt>
                    <dd className="text-sm mt-5 h-28 text-gray-200">
                        프로젝트 전반의 리더 역할을 수행하며, <br />
                        전체적인 설정, 다양한 기능 구현과
                        <br />
                        인터렉션을 담당했습니다.
                        <ul className="flex justify-center gap-2 mt-5">
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://wiki.yoyobar.xyz"
                                    target="_blank"
                                    className="w-full h-full border border-gray-400 rounded-full flex items-center justify-center hover:border-white fill-gray-400 hover:fill-white pt-0.5 transition "
                                >
                                    <IconBlog />
                                </Link>
                            </li>
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/yoyobar"
                                    target="_blank"
                                    className="w-full h-full border border-gray-400 rounded-full flex items-center justify-center hover:border-white fill-gray-400 hover:fill-white pb-0.5 transition"
                                >
                                    <IconGithub />
                                </Link>
                            </li>
                        </ul>
                    </dd>
                    <img
                        src="/img/landing_gradientLine.png"
                        className="top-0 absolute right-0 sm:block hidden"
                    />
                </dl>
                <dl className="sm:w-60 w-full relative mt-10 sm:mt-0">
                    <dt>
                        <p className="block text-sm font-medium text-literal-joy">FE Member</p>
                        Park, Min Ah
                    </dt>
                    <dd className="text-sm mt-5 h-28 text-gray-200">
                        프론트엔드 개발을 담당하며,
                        <br /> 디자인과 코딩 작업을 <br />
                        협력하여 진행했습니다.
                        <ul className="flex justify-center gap-2 mt-5">
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://29-0.tistory.com/"
                                    target="_blank"
                                    className="w-full h-full border border-gray-400 rounded-full flex items-center justify-center hover:border-white fill-gray-400 hover:fill-white pt-0.5 transition "
                                >
                                    <IconBlog />
                                </Link>
                            </li>
                            <li className="w-10 h-10 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/devpma"
                                    target="_blank"
                                    className="w-full h-full border border-gray-400 rounded-full flex items-center justify-center hover:border-white fill-gray-400 hover:fill-white pb-0.5 transition"
                                >
                                    <IconGithub />
                                </Link>
                            </li>
                        </ul>
                    </dd>
                    <img
                        src="/img/landing_gradientLine.png"
                        className="top-0 absolute right-0 sm:block hidden"
                    />
                </dl>
                <dl className="sm:w-60 w-full relative mt-10 sm:mt-0">
                    <dt>
                        <p className="block text-sm font-medium text-primary">FE Member</p>
                        Lee, Ung Pyo
                    </dt>
                    <dd className="text-sm mt-5 text-gray-200">
                        프론트엔드 개발을 담당하며,
                        <br /> 서비스의 사용자 인터페이스와 <br /> 사용자 경험을 설계하고 <br />{" "}
                        구현했습니다.
                        <ul className="flex justify-center gap-2 mt-5">
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://www.notion.so/8c211738daeb4dd58f907e92a0cc3649"
                                    target="_blank"
                                    className="w-full h-full border border-gray-400 rounded-full flex items-center justify-center hover:border-white fill-gray-400 hover:fill-white pt-0.5 transition "
                                >
                                    <IconBlog />
                                </Link>
                            </li>
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/ungpyolee"
                                    target="_blank"
                                    className="w-full h-full border border-gray-400 rounded-full flex items-center justify-center hover:border-white fill-gray-400 hover:fill-white pb-0.5 transition"
                                >
                                    <IconGithub />
                                </Link>
                            </li>
                        </ul>
                    </dd>
                    <img
                        src="/img/landing_gradientLine.png"
                        className="top-0 absolute right-0 sm:block hidden"
                    />
                </dl>
                <dl className="sm:w-60 w-full relative mt-10 sm:mt-0">
                    <dt>
                        <p className="block text-sm font-medium text-literal-sorrow">BE Leader</p>
                        Yang, Ui Jong
                    </dt>
                    <dd className="text-sm mt-5 text-gray-200">
                        백엔드 시스템의 전체 구조를 <br /> 설계하고, 데이터베이스와 <br /> 서버의
                        안정적인 운영을
                        <br />
                        담당했습니다.
                        <ul className="flex justify-center gap-2 mt-5">
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://velog.io/@calzone0404/posts"
                                    target="_blank"
                                    className="w-full h-full border border-gray-400 rounded-full flex items-center justify-center hover:border-white fill-gray-400 hover:fill-white pt-0.5 transition "
                                >
                                    <IconBlog />
                                </Link>
                            </li>
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/Scanf-s"
                                    target="_blank"
                                    className="w-full h-full border border-gray-400 rounded-full flex items-center justify-center hover:border-white fill-gray-400 hover:fill-white pb-0.5 transition"
                                >
                                    <IconGithub />
                                </Link>
                            </li>
                        </ul>
                    </dd>
                    <img
                        src="/img/landing_gradientLine.png"
                        className="top-0 absolute right-0 sm:block hidden"
                    />
                </dl>
                <span></span>
                <dl className="sm:w-60 w-full mt-10 sm:mt-0">
                    <dt>
                        <p className="block text-sm font-medium text-literal-worry">BE Member</p>
                        Choi, Seong Rak
                    </dt>
                    <dd className="text-sm mt-5 text-gray-200">
                        백엔드 개발을 담당하며, <br /> ai 튜닝으로 서비스의 주축을
                        <br /> 담당하였습니다.
                        <ul className="flex justify-center gap-2 mt-5">
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://velog.io/@sr_c/posts"
                                    target="_blank"
                                    className="w-full h-full border border-gray-400 rounded-full flex items-center justify-center hover:border-white fill-gray-400 hover:fill-white pt-0.5 transition "
                                >
                                    <IconBlog />
                                </Link>
                            </li>
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/ChoiSeongRak"
                                    target="_blank"
                                    className="w-full h-full border border-gray-400 rounded-full flex items-center justify-center hover:border-white fill-gray-400 hover:fill-white pb-0.5 transition"
                                >
                                    <IconGithub />
                                </Link>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default HomeTeamInfo;
