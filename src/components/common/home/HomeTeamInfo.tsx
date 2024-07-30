import { Link } from "react-router-dom";
import { IconBlog, IconGithub } from "../../../config/IconData";

const HomeTeamInfo = () => {
    return (
        <div>
            <div className="text-white flex text-center gap-[30px] max-w-[1140px] m-auto break-keep">
                <dl>
                    <dt>
                        <strong className="block text-literal-angry">Team & FE Leader</strong>
                        Kim, Min Su
                    </dt>
                    <dd className="text-[14px] leading-[22px] mt-5 mb-[30px]">
                        프로젝트 전반의 리더 역할을 수행하며, 전체적인 설정, 다양한 기능 구현과
                        인터렉션을 담당했습니다.
                        <ul className="flex justify-center items-end mt-[30px] gap-[8px]">
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://wiki.yoyobar.xyz"
                                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                >
                                    <IconBlog className="group-hover:fill-black" />
                                </Link>
                            </li>
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/yoyobar"
                                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                >
                                    <IconGithub className="group-hover:fill-black" />
                                </Link>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <strong className="block text-literal-joy">FE Member</strong>
                        Park, Min Ah
                    </dt>
                    <dd className="text-[14px] leading-[22px] mt-5 mb-[30px] min-h-[158px]">
                        프론트엔드 개발을 담당하며, 디자인과 코딩 작업을 협력하여 진행했습니다.
                        <ul className="flex justify-center mt-[30px] gap-[8px]">
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://29-0.tistory.com/"
                                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                >
                                    <IconBlog className="group-hover:fill-black" />
                                </Link>
                            </li>
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/devpma"
                                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                >
                                    <IconGithub className="group-hover:fill-black" />
                                </Link>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <strong className="block text-primary">FE Member</strong>
                        Lee, Ung Pyo
                    </dt>
                    <dd className="text-[14px] leading-[22px] mt-5 mb-[30px] min-h-[158px]">
                        프론트엔드 개발을 담당하며, 서비스의 사용자 인터페이스와 사용자 경험을
                        설계하고 구현했습니다.
                        <ul className="flex justify-center mt-[30px] gap-[8px]">
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/ungpyolee"
                                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                >
                                    <IconBlog className="group-hover:fill-black" />
                                </Link>
                            </li>
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/ungpyolee"
                                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                >
                                    <IconGithub className="group-hover:fill-black" />
                                </Link>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        <strong className="block text-literal-sorrow">BE Leader</strong>
                        Yang, Ui Jong
                    </dt>
                    <dd className="text-[14px] leading-[22px] mt-5 mb-[30px] min-h-[158px]">
                        백엔드 시스템의 전체 구조를 설계하고, 데이터베이스와 서버의 안정적인 운영을
                        담당했습니다.
                        <ul className="flex justify-center mt-[50px] gap-[8px]">
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/Scanf-s"
                                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                >
                                    <IconBlog className="group-hover:fill-black" />
                                </Link>
                            </li>
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://velog.io/@calzone0404/posts"
                                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                >
                                    <IconGithub className="group-hover:fill-black" />
                                </Link>
                            </li>
                        </ul>
                    </dd>
                </dl>
                <span></span>
                <dl>
                    <dt>
                        <strong className="block text-literal-worry">BE Member</strong>
                        Choi, Seong Rak
                    </dt>
                    <dd className="text-[14px] leading-[22px] mt-5 mb-[30px] min-h-[158px]">
                        백엔드 개발을 담당하며, ai 튜닝으로 서비스의 주축을 담당하였습니다.
                        <ul className="flex justify-center mt-[50px] gap-[8px]">
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://github.com/ChoSeongRak"
                                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                >
                                    <IconBlog className="group-hover:fill-black" />
                                </Link>
                            </li>
                            <li className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center group">
                                <Link
                                    to="https://velog.io/@sr_c/posts"
                                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white group-hover:fill-black"
                                >
                                    <IconGithub className="group-hover:fill-black" />
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
