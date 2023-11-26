import classNames from 'classnames/bind';
import styles from './Feeling.module.scss';

import Tippy from '@tippyjs/react/headless';
import Tippy2 from '@tippyjs/react';
import { like, tym, thuong_thuong, haha2, wow, sad, phano } from '@src/assets/images';

const cx = classNames.bind(styles);

function Felling({ children }) {
    return (
        <Tippy interactive delay={[400, 500]} appendTo={document.body} render={(attrs) => FeelingBox(attrs)}>
            {children}
        </Tippy>
    );
}

export default Felling;

const FeelingBox = (attrs) => {
    return (
        <div className={cx('fixed rounded-full p-2 select-none z-10', 'feeling')}>
            <div className="flex items-center justify-between gap-2">
                <Tippy2 delay="0" appendTo={document.body} content="Thích">
                    <div className={cx('item', 'w-10 cursor-pointer')}>
                        <img className="w-10 h-w-10" src={like} alt="" />
                    </div>
                </Tippy2>
                <Tippy2 delay="0" appendTo={document.body} content="Yêu thích">
                    <div className={cx('item', 'w-10 cursor-pointer')}>
                        <img className="w-10 h-w-10" src={tym} alt="" />
                    </div>
                </Tippy2>
                <Tippy2 delay="0" appendTo={document.body} content="Thương thương">
                    <div className={cx('item', 'w-10 cursor-pointer')}>
                        <img className="w-10 h-w-10" src={thuong_thuong} alt="" />
                    </div>
                </Tippy2>
                <Tippy2 delay="0" appendTo={document.body} content="Haha">
                    <div className={cx('item', 'w-10 cursor-pointer')}>
                        <img className="w-10 h-w-10" src={haha2} alt="" />
                    </div>
                </Tippy2>
                <Tippy2 delay="0" appendTo={document.body} content="Wow">
                    <div className={cx('item', 'w-10 cursor-pointer')}>
                        <img className="w-10 h-w-10" src={wow} alt="" />
                    </div>
                </Tippy2>
                <Tippy2 delay="0" appendTo={document.body} content="Buồn">
                    <div className={cx('item', 'w-10 cursor-pointer')}>
                        <img className="w-10 h-w-10" src={sad} alt="" />
                    </div>
                </Tippy2>
                <Tippy2 delay="0" appendTo={document.body} content="Phẫn nộ">
                    <div className={cx('item', 'w-10 cursor-pointer')}>
                        <img className="w-10 h-w-10" src={phano} alt="" />
                    </div>
                </Tippy2>
            </div>
        </div>
    );
};
