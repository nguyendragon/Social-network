import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { message } from 'antd';
import Joi from 'joi';

import styles from './components/Account.module.scss';
import AppUser from '@src/services/AppUser';

const cx = classNames.bind(styles);

function Register() {
    const [isLogin, setIsLogin] = useState(false);
    const [account, setAccount] = useState({
        email: "",
        password: "",
        confirm_password: "",
    });

    const schema = Joi.object({
        email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }).messages({
            'any.required': `Vui lòng nhập địa chỉ email`,
            'string.empty': `Trường Email không được để trống`,
            'string.email': `Email không đúng định dạng`,
        }),
        password: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;\"'?/.,><|\-=`~\\]{6,30}$/)).messages({
            'string.empty': `Trường mật khẩu không được để trống`,
            'any.required': `Vui lòng nhập mật khẩu`,
            'string.pattern.base': `Mật khẩu yêu cầu tối thiểu 6 - 25 kí tự`,
        }),
        confirm_password: Joi.string().valid(Joi.ref('password')).messages({
            'any.only': 'Mật khẩu xác nhận không chính xác',
        }).required(),
    });

    const handleLogin = async () => {
        // setIsLogin(true);
        const { error } = schema.validate(account);

        // if (error) return message.error(error.message);
        const res = await AppUser.Register(account);
    }

    return (
        <div className="min-w-screen min-h-screen flex justify-center items-center px-1 select-none">
            <div className={cx('login-form-container')}>
                <div className={cx('login-form')}>
                    <h2 className={cx('text-2xl font-bold text-center', 'glowIcon')}>Register</h2>
                    <div className={cx('input-group')}>
                        <FontAwesomeIcon className="absolute left-2" icon={faUser} />
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className={cx('input_text', 'pl-8 py-5')}
                            autoComplete="off"
                            spellCheck="false"
                            value={account.email}
                            onChange={(e) => setAccount((prev) => ({ ...prev, email: e.target.value }))}
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
                            className={cx('input_text', 'pl-8 py-5')}
                            autoComplete="off"
                            spellCheck="false"
                            value={account.password}
                            onChange={(e) => setAccount((prev) => ({ ...prev, password: e.target.value }))}
                        />
                        <label className="duration-150 absolute ml-10 cursor-text" htmlFor="password">
                            Password
                        </label>
                    </div>
                    <div className={cx('input-group')}>
                        <FontAwesomeIcon className="absolute left-2" icon={faUnlockAlt} />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            id="confirm-password"
                            className={cx('input_text', 'pl-8 py-5')}
                            autoComplete="off"
                            spellCheck="false"
                            value={account.confirm_password}
                            onChange={(e) => setAccount((prev) => ({ ...prev, confirm_password: e.target.value }))}
                        />
                        <label className="duration-150 absolute ml-10 cursor-text" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                    </div>
                    <div onClick={() => handleLogin()} className={cx('button-group', { 'pointer-events-none': isLogin })}>
                        <span>Đăng ký</span>
                    </div>

                    <div className={cx('text-center mt-6')}>
                        <span className="text-white cursor-pointer">Bạn đã có tài khoản?</span>
                        <Link to="/auth/login">
                            <button className={cx('cursor-pointer ml-2')}>Đăng nhập</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
