import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import axios from "axios";

export const Register = () => {

    const [inputs, setInputs] = useState({
        fname: "",
        lname: "",
        username: "",
        pw: "",
        email: "",
        address: "",
        phone: "",
        role:"user" //added role
    });

    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    };

    // console.log(inputs)
    var form = document.getElementById('signInForm');
    var form2 = document.getElementById('signInForm2');
    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.post("https://secret-chin-production.up.railway.app/api/user/register", inputs);
            setErr("Success! Who's a good boi!");
            //   form.reset();
            //   form2.reset();
            // I comment this to deploy, fix that later
           // window.location.replace("http://localhost:3000/user/login");
        } catch (err) {
            setErr(err.response.data);
        }

    };

    return (
        <div className="login-form flex items-center justify-center h-screen  ">
            <div className="formm bg-light-grey flex flex-col gap-4 items-center justify-center w-[80%] md:w-[55%]  overflow-auto border border-black  py-2 rounded-md ">
                <h2 className="text-3xl font-bold mb-8 text-green-900 ">Register</h2>
                <div className="flex flex-col md:flex-row w-[70%] justify-around items-center gap-4">
                    <div>
                        <form className="w-[100%] " id="signInForm">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2 text-green-900 " htmlFor="password">
                                    First Name:
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fname"
                                    type="text"
                                    placeholder="First name"
                                    name="fname"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4 ">
                                <label className="block text-gray-700 font-bold mb-2 text-green-900 " htmlFor="password">
                                    Last Name:
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fname"
                                    type="text"
                                    placeholder="Last name"
                                    name="lname"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2 text-green-900 " htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2 text-green-900 " htmlFor="username">
                                    Username
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="username"
                                    name="username"
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div>
                        <form className="w-[100%]" id="signInForm2">

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

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2 text-green-900 " htmlFor="password">
                                    Address
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="text"
                                    type=""
                                    placeholder="Address"
                                    name="address"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2 text-green-900 " htmlFor="password">
                                    Phone
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phone"
                                    onChange={handleChange}

                                />
                            </div>
                        </form>
                    </div>
                </div>
                <button
                    className="w-[70%] bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleClick}
                >
                    Register
                </button>
                {err && err}
                <Link to="/user/loginAccount">
                    <div className="mt-5">
                        <p class="pb-2 border-b-2">Already have account? Login Here!!!</p>

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Register; //not sure about this, it was on the video
//<button onClick={() => setMessage('')}>Clear field</button>