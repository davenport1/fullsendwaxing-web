import httpClient from "@/api/Client";
import * as http from "http";

const createUserEndpoint = '/createuser';
const loginEndpoint = '/login';
const logoutEndpoint = '/logout';
const changePasswordEndpoint = '/notimplemented';

export const createUser = async (email, password) => {
    try {
        const response = await httpClient.post(createUserEndpoint, { email, password });
        const token = response.data;
        localStorage.setItem('token', token);
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