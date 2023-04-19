import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./Login.css";
export const Login = () => {

    const [inputs, setInputs] = useState({
        username: "",
        pw: "",
    });

    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(inputs);
            navigate("/")
        } catch (err) {
            setErr(err.response.data);
        }
    };
    return (

        <div className="login-form flex items-center justify-center h-screen ">
            <div className="formm bg-light-grey flex flex-col items-center justify-center w-[90%] md:w-[30%] border border-black px-5 py-8 rounded-md ">
                <h2 className="text-3xl font-bold mb-8 text-green-900 ">Sign In</h2>
                <form className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 text-green-900 " htmlFor="email">
                            Username
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Username"
                            name="username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2 text-green-900 " htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="pw"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                        {err ? <p color="red">{err}</p> : null}
                        <a
                            className="inline-block align-baseline font-bold text-sm text-green-900 hover:text-green-500"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <Link to="/user/register">
                    <div className="mt-5">
                        <p class="pb-2 border-b-2">New User? Register Here!!!</p>

                    </div>
                </Link>
            </div>
        </div>

    )
}