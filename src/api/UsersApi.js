import httpClient from "@/api/Client";

const createUserEndpoint = '/createuser';
const loginEndpoint = '/login';
const logoutEndpoint = '/logout';
const changePasswordEndpoint = '/notimplemented';

export const createUser = async (email, password) => {
    try {
        const response = await httpClient.post(createUserEndpoint, { email, password });
        const { email: userEmail, token } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('currentUser', email);
        return token;
    } catch (error) {
        throw new Error('Failed to create user\n' + error);
    }
}

export const login = async(email, password) => {
    try {
        const response = await httpClient.post(loginEndpoint, { email, password });
    } catch (error) {

    }
}

export const logout = async (token) => {
    try {
        const response = await httpClient.post(logoutEndpoint, { token });
    } catch (error) {

    }
}

export const changePassword = async (email, newPassword) => {
    try {
        const response = await httpClient.post(changePasswordEndpoint, { email, newPassword });
    } catch (error) {

    }
}

module.exports = {
    createUser,
    login,
    logout,
    changePassword
};