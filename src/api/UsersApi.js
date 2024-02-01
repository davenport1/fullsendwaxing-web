import httpClient from "@/api/Client";

const createUserEnpoint = '/createuser';
const loginEndpoint = '/login';
const logoutEndpoint = '/logout';
const changePasswordEndpoint = '/notimplemented';

export const createUser = async (email, password) => {
    httpClient.post(createUserEnpoint)
        .then(function (response) {
            // retrieve token to use for this user from the response.
            // do we login when creating user?
        })
}

export const login = async(email, password) => {
    httpClient.post(loginEndpoint)
        .then(function (response) {
            // retrieve token to use for this user from the response.
        })
}

export const logout = async (token) => {
    httpClient.post(logoutEndpoint)
        .then(function (response) {
            // should just handle 200 ok
        })
}

export const changePassword = async (email, newPassword) => {
    httpClient.post(changePasswordEndpoint)
        .then(function (response) {
            // login as well and retrieve token?
        })
}

module.exports = {
    createUser,
    login,
    logout,
    changePassword
};