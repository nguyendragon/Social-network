import plusNewPost from '@src/assets/images/plus-new-post.svg';
import classNames from 'classnames/bind';
import styles from './News.module.scss';

const cx = classNames.bind(styles);

function News() {
    return (
        <div className={cx('overflow-y-scroll w-full bg-[#242526] rounded-md mb-3 p-3', 'news')}>
            <div className={cx('news-container')} style={{ transform: 'translateX(0px)' }}>
                <div className={cx('item-news')}>
                    <img className={cx('bg-news')} src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    <div className={cx('img-news')}></div>
                    <div className="bg-[#1c1d1d] absolute bottom-0 left-0 right-0 rounded-b-md flex justify-center py-3 z-30">
                        <div className="absolute top-[-1.2rem] bg-[#2e89ff] rounded-full border-4 border-[#1c1d1d] p-1">
                            <img width="25" src={plusNewPost} alt="" />
                        </div>
                        <span className="text-[#fff] text-[0.875rem] font-medium mt-3">Tạo tin</span>
                    </div>
                </div>
                <div className={cx('item-news')}>
                    <div className={cx('avatar', 'active')}>
                        <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    </div>
                    <img className={cx('bg-news')} src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    <div className={cx('img-news')}></div>
                    <h3 className={cx('name')}>Nguyễn Long</h3>
                </div>
                <div className={cx('item-news')}>
                    <div className={cx('avatar')}>
                        <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    </div>
                    <div className={cx('online')}></div>
                    <img className={cx('rounded-md z-[2]', 'bg-news')} src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    <div className={cx('img-news')}></div>
                    <h3 className={cx('name')}>Đào Quang Hùng</h3>
                </div>
                <div className={cx('item-news')}>
                    <div className={cx('avatar')}>
                        <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    </div>
                    <div className={cx('online')}></div>
                    <img className={cx('rounded-md z-[2]', 'bg-news')} src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    <div className={cx('img-news')}></div>
                    <h3 className={cx('name')}>Hoàng Hùng</h3>
                </div>
                <div className={cx('item-news')}>
                    <div className={cx('avatar')}>
                        <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    </div>
                    <div className={cx('online')}></div>
                    <img className={cx('rounded-md z-[2]', 'bg-news')} src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    <div className={cx('img-news')}></div>
                    <h3 className={cx('name')}>Nguyễn Hữu Quân</h3>
                </div>
                <div className={cx('item-news')}>
                    <div className={cx('avatar')}>
                        <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    </div>
                    <img className={cx('rounded-md z-[2]', 'bg-news')} src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    <div className={cx('img-news')}></div>
                    <h3 className={cx('name')}>Hoàng TheAnh</h3>
                </div>
                <div className={cx('item-news')}>
                    <div className={cx('avatar')}>
                        <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    </div>
                    <div className={cx('online')}></div>
                    <img className={cx('rounded-md z-[2]', 'bg-news')} src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    <div className={cx('img-news')}></div>
                    <h3 className={cx('name')}>Lãnh Thu Hà</h3>
                </div>
                <div className={cx('item-news')}>
                    <div className={cx('avatar')}>
                        <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    </div>
                    <div className={cx('online')}></div>
                    <img className={cx('rounded-md z-[2]', 'bg-news')} src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    <div className={cx('img-news')}></div>
                    <h3 className={cx('name')}>Nguyễn Thị Lan Anh</h3>
                </div>
                <div className={cx('item-news')}>
                    <div className={cx('avatar')}>
                        <img src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    </div>
                    <div className={cx('online')}></div>
                    <img className={cx('rounded-md z-[2]', 'bg-news')} src="https://i.imgur.com/uAKP1k3.jpg" alt="" />
                    <div className={cx('img-news')}></div>
                    <h3 className={cx('name')}>Nguyễn Thị Tâm</h3>
                </div>
            </div>
        </div>
    );
}

export default News;
