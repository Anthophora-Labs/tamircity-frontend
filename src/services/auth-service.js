import axios from 'axios';

const API_URL = 'http://localhost:8888/api/v1/user/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'login-jwt', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL, {
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();