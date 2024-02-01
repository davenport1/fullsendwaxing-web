
import React, { useState } from 'react';
import {router} from "next/client";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLoginClick(e) {
        e.preventDefault();
        // Add logic to handle login here using username and password state
    }

    function verifyEmail(email, password) {

    }

    function handleCreateAccountClick(e) {
        router.push('/create-account');
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-700">
            <div className="max-w-lg w-full mx-8 bg-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <form onSubmit={handleLoginClick}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                               value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                               value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                     text-gray-700 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Login
                    </button>
                </form>
                <div className="mt-4">
                    <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Create one</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
