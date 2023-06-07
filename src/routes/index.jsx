import Home from '@src/pages/Home';
import Messages from '@src/pages/Messages';
import { Login, Register, ForgotPassword } from '@src/pages/Account';
// import Maintain from '@src/pages/Maintain';

// Public Router
const publicRoutes = [
    { path: '/', component: Home, Layout: true },

    { path: '/auth/login', component: Login, Layout: false },

    { path: '/auth/register', component: Register, Layout: false },

    { path: '/forgot-password', component: ForgotPassword, Layout: false },

    { path: '/messages', component: Messages, Layout: true },

    { path: '/messages/t/:userId', component: Messages, Layout: true },

    // { path: '*', component: Home, Layout: false },
];
export { publicRoutes };
