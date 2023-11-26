import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFilm, faGamepad, faHouse, faSearch, faStore } from '@fortawesome/free-solid-svg-icons';
import TippyBox from '@src/components/TippyBox';

import facebook from '@src/assets/images/facebook.svg';
import message from '@src/assets/images/message.svg';
import bell from '@src/assets/images/bell.svg';
import { Link, useNavigate } from 'react-router-dom';
import TippyRender from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import MenuAccount from './components/MenuAccount';

function Header() {
    const navigate = useNavigate();
    return (
        <div className="bg-[#242526] border-b border-[#3e4042] min-h-[60px] w-full fixed top-0 z-[10000] flex justify-between items-center px-4 select-none">
            <div className="flex items-center">
                <div onClick={() => navigate('/')} className="select-none">
                    {/* <img className="cursor-pointer" src={facebook} alt="" /> */}
                    <svg viewBox="0 0 36 36" height={40} width={40}>
                        <path
                            d="M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z"
                            fill="#0866FF"
                        />
                        <path
                            className="xe3v8dz"
                            d="M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z"
                            fill="#FFFFFF"
                        />
                    </svg>
                </div>

                <div className="hidden md:flex relative ml-3">
                    <FontAwesomeIcon
                        className="absolute top-[50%] -translate-y-1/2 text-[#b0b3b8] left-3.5"
                        icon={faSearch}
                    />
                    <input
                        type="text"
                        placeholder="Tìm kiếm trên facebook"
                        spellCheck="false"
                        className="bg-[#3a3b3c] hover:bg-[#9999] focus:bg-[#3a3b3c] duration-150 rounded-full py-2 pl-10 pr-3 min-w-[250px] outline-none text-white"
                    />
                </div>
            </div>

            <div className="w-full md:w-2/3 lg:w-2/4 xl:w-2/5 2xl:w-2/6 mx-auto hidden lg:flex justify-center items-center gap-1 absolute left-1/2 -translate-x-1/2">
                <TippyBox title="Trang chủ">
                    <div className="flex-1 flex justify-center items-center h-12 rounded-xl duration-100 cursor-pointer">
                        <FontAwesomeIcon className="text-[#0866ff] text-xl" icon={faHouse} />
                    </div>
                </TippyBox>
                <TippyBox title="Video">
                    <div className="flex-1 flex justify-center items-center h-12 hover:bg-[#3a3c3c] rounded-xl duration-100 cursor-pointer">
                        <FontAwesomeIcon className="text-[#b0b3b8] text-xl" icon={faFilm} />
                    </div>
                </TippyBox>
                <TippyBox title="MarketPlace">
                    <div className="flex-1 flex justify-center items-center h-12 hover:bg-[#3a3c3c] rounded-xl duration-100 cursor-pointer">
                        <FontAwesomeIcon className="text-[#b0b3b8] text-xl" icon={faStore} />
                    </div>
                </TippyBox>
                <TippyBox title="Công việc">
                    <div className="flex-1 flex justify-center items-center h-12 hover:bg-[#3a3c3c] rounded-xl duration-100 cursor-pointer">
                        <FontAwesomeIcon className="text-[#b0b3b8] text-xl" icon={faBriefcase} />
                    </div>
                </TippyBox>
                <TippyBox title="Trò chơi">
                    <div className="flex-1 flex justify-center items-center h-12 hover:bg-[#3a3c3c] rounded-xl duration-100 cursor-pointer">
                        <FontAwesomeIcon className="text-[#b0b3b8] text-xl" icon={faGamepad} />
                    </div>
                </TippyBox>

                <div className="bg-[#0866ff] absolute -bottom-1 h-[3px]" style={{ width: '20%', left: '0%' }}></div>
            </div>

            <div className="">
                <div className="flex justify-end items-center gap-4">
                    <TippyBox title="Messenger">
                        <Link to="/messages">
                            <div className="flex justify-center items-center rounded-full w-10 h-10 cursor-pointer bg-[#3a3b3c]">
                                <img width="20" src={message} alt="" />
                            </div>
                        </Link>
                    </TippyBox>
                    <TippyBox title="Thông báo">
                        <div className="flex justify-center items-center rounded-full w-10 h-10 cursor-pointer bg-[#3a3b3c]">
                            <img width="20" src={bell} alt="" />
                        </div>
                    </TippyBox>
                    <Tippy
                        arrow=""
                        className="bg-[#fff] text-[#242526] p-1 text-[0.8rem]"
                        delay={[100, 150]}
                        content="Tài khoản"
                        placement="bottom"
                    >
                        <TippyRender
                            interactive
                            trigger="click"
                            delay={[100]}
                            appendTo={document.body}
                            render={() => <MenuAccount />}
                        >
                            <div className="flex justify-center items-center rounded-full w-10 h-10 cursor-pointer overflow-hidden bg-[#3a3b3c]">
                                <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                            </div>
                        </TippyRender>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Header;
