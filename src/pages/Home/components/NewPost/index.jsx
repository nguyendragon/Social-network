import classNames from 'classnames/bind';
import styles from './NewPost.module.scss';

import TippyBox from '@src/components/TippyBox';
import { livestream, imgvideo, feeling } from '@src/assets/images';

const cx = classNames.bind(styles);

function NewPost() {
    return (
        <div className="flex flex-col items-center min-h-12 bg-[#242526] mb-4 rounded-md p-2 md:py-4 md:px-6">
            <div className="flex items-center gap-3 w-full md:pb-2">
                <div className="flex justify-center items-center w-11 h-11 rounded-full overflow-hidden">
                    <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                </div>
                <div className="w-full flex-1">
                    <div className="flex items-center w-full bg-[#3a3b3c] hover:bg-[#9999] duration-150 rounded-full h-10 outline-none pl-3 select-none cursor-pointer">
                        <span className="text-[#b0b3b8] text-md">Long ơi, bạn đang nghĩ gì thế?</span>
                    </div>
                </div>
                <div className="flex md:hidden justify-center items-center gap-3 cursor-pointer hover:bg-[#9999] duration-150 p-1 py-2 rounded-md">
                    <img className="w-6 h-6" src={imgvideo} alt="" />
                </div>
            </div>
            <div
                className="hidden md:flex justify-between items-center w-full pt-3"
                style={{ borderTop: 'solid 1px rgba(255, 255, 255, 0.1)' }}
            >
                <TippyBox title="Coming soon..." placement="bottom">
                    <div className="flex justify-center items-center gap-3 w-full select-none cursor-pointer hover:bg-[#9999] duration-150 p-1 py-2 rounded-md">
                        <img className="w-6 h-6" src={livestream} alt="" />
                        <span className="text-[#b0b3b8] font-semibold">Video trực tiếp</span>
                    </div>
                </TippyBox>
                <div className="flex justify-center items-center gap-3 w-full select-none cursor-pointer hover:bg-[#9999] duration-150 p-1 py-2 rounded-md">
                    <img className="w-6 h-6" src={imgvideo} alt="" />
                    <span className="text-[#b0b3b8] font-semibold">Ảnh/video</span>
                </div>
                <TippyBox title="Coming soon..." placement="bottom">
                    <div className="flex justify-center items-center gap-3 w-full select-none cursor-pointer hover:bg-[#9999] duration-150 p-1 py-2 rounded-md">
                        <img className="w-6 h-6" src={feeling} alt="" />
                        <span className="text-[#b0b3b8] font-semibold">Cảm xúc/Hoạt động</span>
                    </div>
                </TippyBox>
            </div>
        </div>
    );
}

export default NewPost;
