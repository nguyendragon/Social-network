import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './components/Account.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className="min-w-screen min-h-screen flex justify-center items-center px-1 select-none">
            <div className={cx('login-form-container')}>
                <div className={cx('login-form')}>
                    <h2 className={cx('text-2xl font-bold text-center', 'glowIcon')}>Login</h2>
                    <div className={cx('input-group')}>
                        <FontAwesomeIcon className="absolute left-2" icon={faUser} />
                        <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            className={cx('input_text', 'pl-8 py-5 text-white')}
                            autoComplete="off"
                            spellCheck="false"
                        />
                        <label className="duration-150 absolute ml-10 cursor-text" htmlFor="email">
                            Email
                        </label>
                    </div>
                    <div className={cx('input-group')}>
                        <FontAwesomeIcon className="absolute left-2" icon={faUnlockAlt} />
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            className={cx('input_text', 'pl-8 py-5 text-white')}
                            autoComplete="off"
                            spellCheck="false"
                        />
                        <label className="duration-150 absolute ml-10 cursor-text" htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className={cx('button-group')}>
                        <span>Đăng nhập</span>
                    </div>

                    <div className={cx('text-center mt-6', 'footer')}>
                        <Link to="/forgot-password" className="text-white cursor-pointer">
                            Quên mật khẩu?
                        </Link>
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/auth/register">
                            <button className={cx('register')}>Tạo tài khoản mới</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
