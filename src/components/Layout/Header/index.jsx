import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
        <div className="bg-[#242526] border-b-[2px] border-[#3e4042] min-h-[60px] w-full fixed top-0 z-[10000] flex justify-between items-center px-4 select-none">
            <div onClick={() => navigate('/')} className="w-full select-none">
                <img className="cursor-pointer" src={facebook} alt="" />
            </div>
            <div className="hidden md:flex w-full relative">
                <FontAwesomeIcon
                    className="absolute top-[50%] -translate-y-1/2 text-[#b0b3b8] left-3"
                    icon={faSearch}
                />
                <input
                    type="text"
                    placeholder="Tìm kiếm trên facebook"
                    spellCheck="false"
                    className="bg-[#3a3b3c] hover:bg-[#9999] focus:bg-[#3a3b3c] duration-150 rounded-full py-2 pl-9 pr-3 min-w-[500px] w-[100%] outline-none text-white"
                />
            </div>
            <div className="w-full">
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
