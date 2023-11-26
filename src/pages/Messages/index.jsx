import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Messages.module.scss';

import {
    info,
    call,
    callvideo,
    iconMessage,
    sticker,
    imageMessage,
    likeMessage,
    voiceMessage,
    gifMessage,
} from '@src/assets/images';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Messages() {
    return (
        <div className="grid grid-cols-12 h-screen w-full pt-[60px]">
            <div className="col-span-3 bg-[#242526] pl-3" style={{ borderRight: '1px solid #3e4042' }}>
                <div className="text-white my-3">
                    <h3 className="text-3xl font-bold select-none">Chat</h3>
                </div>
                <div className="hidden md:flex w-full relative mx-1 pr-6">
                    <FontAwesomeIcon
                        className="absolute top-[50%] -translate-y-1/2 text-[#b0b3b8] left-3"
                        icon={faSearch}
                    />
                    <input
                        type="text"
                        placeholder="Tìm kiếm trên Messager"
                        spellCheck="false"
                        className="bg-[#3a3b3c] focus:bg-[#3a3b3c] select-none duration-150 rounded-full py-2 pl-9 pr-3 w-[100%] outline-none text-white"
                    />
                </div>
                <div className="mt-3 max-h-[calc(100%-64px)] md:max-h-[calc(100%-115px)] overflow-y-auto pr-2">
                    <NavLink
                        to="/messages/t/100016982914852"
                        // className="flex cursor-pointer select-none rounded-md pl-2 py-3 duration-200 hover:bg-[#9999]"
                        // style={{ background: 'rgba(45, 136, 255, 0.1)' }}
                        className={({ isActive }) =>
                            isActive
                                ? cx('flex cursor-pointer select-none rounded-md pl-2 py-3 duration-200', 'active')
                                : 'flex cursor-pointer select-none rounded-md pl-2 py-3 duration-200 hover:bg-[#9999]'
                        }
                    >
                        <div className="flex items-center justify-center gap-3 relative">
                            <div className="flex justify-center items-center w-14 h-14 rounded-full overflow-hidden">
                                <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                            </div>
                            <div className="absolute left-[45px] bottom-1 w-4 h-4 rounded-full bg-[#31a24c] border-2 border-[#33363a]"></div>
                            <div className="self-start leading-8">
                                <h3 className="font-semibold text-[#e4e6eb]">Nguyễn Long</h3>
                                <div className="flex gap-1 text-sm text-[#b0b3b8] whitespace-nowrap">
                                    <p className="flex items-center">
                                        đã bày tỏ cảm xúc
                                        <img
                                            className="w-[15px] h-[15px] mx-1"
                                            src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2d/1.5/16/1f606.png"
                                            alt=""
                                        />
                                        về tin ...
                                    </p>
                                    <span aria-hidden="true"> · </span>
                                    <span className="mt-0.5">1 phút</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink
                        to="/messages/t/100016982914853"
                        className={({ isActive }) =>
                            isActive
                                ? cx('flex cursor-pointer select-none rounded-md pl-2 py-3 duration-200', 'active')
                                : 'flex cursor-pointer select-none rounded-md pl-2 py-3 duration-200 hover:bg-[#9999]'
                        }
                    >
                        <div className="flex items-center justify-center gap-3 relative">
                            <div className="flex justify-center items-center w-14 h-14 rounded-full overflow-hidden">
                                <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                            </div>
                            <div className="absolute left-[45px] bottom-1 w-4 h-4 rounded-full bg-[#31a24c] border-2 border-[#33363a]"></div>
                            <div className="self-start leading-8">
                                <h3 className="font-semibold text-[#e4e6eb]">Nguyễn Long</h3>
                                <div className="flex gap-1 text-sm text-[#b0b3b8]">
                                    <p>ong vàng cái gì {':(('}</p>
                                    <span aria-hidden="true"> · </span>
                                    <span className="mt-0.5">1 phút</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <div className="my-6 text-center">
                        <p className="text-md text-[#b0b3b8]">Không còn tin nhắn</p>
                    </div>
                </div>
            </div>
            <div className="col-span-9  hidden md:flex flex-col w-full h-full bg-[#242526] z-[3]">
                <div className="w-full select-none" style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' }}>
                    <div className="flex items-center justify-between py-1 px-3">
                        <div className="flex items-center gap-2 z-[1] relative cursor-pointer hover:bg-[#9999] duration-150 py-1 px-4 rounded-md">
                            <div className="flex justify-center items-center w-11 h-11 rounded-full overflow-hidden">
                                <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                            </div>
                            <div className="absolute left-[48px] bottom-1 w-4 h-4 rounded-full bg-[#31a24c] border-2 border-[#33363a]"></div>
                            <div className="self-start leading-5 mt-1">
                                <h3 className="text-[#e4e6eb] font-bold">Nguyễn Long</h3>
                                <span className="text-[#b0b3b8] text-sm">Đang hoạt động</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 z-[2]">
                            <div className="cursor-pointer hover:bg-[#2b2d2d] p-1 duration-150 rounded-full">
                                <img src={call} alt="" />
                            </div>
                            <div className="cursor-pointer hover:bg-[#2b2d2d] p-1 duration-150 rounded-full">
                                <img src={callvideo} alt="" />
                            </div>
                            <div className="cursor-pointer hover:bg-[#2b2d2d] p-2 duration-150 rounded-full">
                                <img src={info} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-h-[calc(100%-115px)] h-full overflow-y-auto">
                    <div className="flex flex-col justify-center mt-6">
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden my-4">
                            <img className="" src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                        </div>
                        <div className="flex justify-center items-center">
                            <h3 className="text-[#e4e6eb] font-bold">Nguyễn Long</h3>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-2">
                            <p className="text-[#b0b3b8]">Facebook</p>
                            <span className="text-[#b0b3b8] text-sm">Các bạn là bạn bè trên Facebook</span>
                        </div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div
                    className="self-end w-full pt-2 pb-4 select-none"
                    style={{ boxShadow: '0 0 4px rgba(0, 0, 0, 0.2)' }}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex justify-between items-center gap-6 px-3">
                            <div className="w-full flex justify-center cursor-pointer rounded-full p-2 hover:bg-[#2b2d2d] duration-150">
                                <img className="w-[65px] xl:w-[35px]" src={voiceMessage} alt="" />
                            </div>
                            <div className="w-full flex justify-center cursor-pointer rounded-full p-2 hover:bg-[#2b2d2d] duration-150">
                                <img className="w-[65px] xl:w-[35px]" src={imageMessage} alt="" />
                            </div>
                            <div className="w-full flex justify-center cursor-pointer rounded-full p-2 hover:bg-[#2b2d2d] duration-150">
                                <img className="w-[65px] xl:w-[35px]" src={sticker} alt="" />
                            </div>
                            <div className="w-full flex justify-center cursor-pointer rounded-full p-2 hover:bg-[#2b2d2d] duration-150">
                                <img className="w-[65px] xl:w-[35px]" src={gifMessage} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <div className="hidden md:flex w-full relative mx-1">
                                <input
                                    type="text"
                                    placeholder="Aa"
                                    spellCheck="false"
                                    className="bg-[#3a3b3c] focus:bg-[#3a3b3c] select-none duration-150 rounded-full py-2 pr-10 pl-4 w-full outline-none text-white"
                                />
                                <img
                                    width="30"
                                    height="30"
                                    className="absolute right-2 bottom-[50%] translate-y-[50%] text-[#b0b3b8] cursor-pointer rounded-full p-1 hover:bg-[#2b2d2d] duration-300"
                                    src={iconMessage}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center cursor-pointer rounded-full p-2 mx-2 hover:bg-[#2b2d2d] duration-150">
                            <img className="w-[30px] xl:w-[30px]" src={likeMessage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Messages;
