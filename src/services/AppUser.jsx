import axios from '@src/api/axios';

export default {
    Login: async (username, password) => {
        let data = await axios.post('/auth/login', { username, password });
        return data;
    },
    Register: async ({ email, password, confirm_password }) => {
        let data = await axios.post('/auth/register', { email, password, confirm_password });
        return data;
    },
};
