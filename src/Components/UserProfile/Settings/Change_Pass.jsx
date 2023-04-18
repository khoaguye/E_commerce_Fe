import React, { useEffect, useState } from "react";
import { TiShoppingCart } from 'react-icons/ti'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Footer from '../../Footer';
import pyramid from '../images/pyramid.png'

function PassChange() {

    const [showPassword, setShowPassword] = useState(false)
    const cart = useSelector((state) => state.cart)
    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }
    return (
        <>
            <div class="bg-amber-100 w-screen h-screen md:w-screen md:h-screen">

                <div class=" sm:h-32 sm:w-screen md:h-32 md:w-screen ">

                    <ul className=' text-[1.5rem] flex flex-col md:flex-row px-2 justify-between'>

                        <Link to="/">
                            <a href="#" className=" h-0 md:inset-y-0  text-neutral-700 md:text-[1.5rem] flex sm:translate-y-12 md:translate-y-8"><span className=' sm:text-4xl md:text-[3rem] text-[1.5rem] font-bold'>Sahara</span><img src={pyramid} alt="pyramid" className="translate-y-1 ml-0 my-auto md:mx-auto sm:pr-40 md:pr-20  mb-auto h-7 sm:translate-y-2.5 md:translate-y-1  md:h-10  md:translate-x-0" /></a>
                        </Link>

                        <div class=" mx-auto text-sm sm:w-50  sm:text-base md:text-base md:font-medium text-center text-neutral-700 sm:-translate-x-20 md:translate-x-3 md:px-auto">
                            <ul class=" flex pl-5 flex-wrap   py-2 translate-y-10 -translate-x-6 sm:translate-x-28 sm:translate-y-7 md:-translate-x-32 md:inset-0 md:translate-y-5 md:right-0 md:m-auto md:mr-auto">

                                <Link to="/user/profile">
                                    <li class="mr-2">
                                        <a href="#" class="inline-block mx-auto py-2 px-2 sm:py-4 sm:px-7 rounded-full bg-orange-500 md:bg-amber-100 md:border-b-2 md:rounded-none md:border-transparent  md:hover:text-orange-500 md:hover:border-orange-600">Profile</a>
                                    </li>
                                </Link>

                                <Link to="/user/orderhistory">
                                    <li class="mr-2">
                                        <a href="#" class="inline-block mx-auto py-2 px-1 sm:py-4 sm:px-7 rounded-full bg-orange-500 md:bg-amber-100 md:border-b-2 md:rounded-none md:border-transparent  md:hover:text-orange-500 md:hover:border-orange-600">Order History</a>
                                    </li>
                                </Link>



                                <li class="mr-2">
                                    <label href="#" class="inline-block mx-auto py-2 px-1 -translate-y-1 md:translate-y-0 sm:py-4 sm:px-7 border-4 rounded-full text-white border-orange-700 bg-orange-600 md:bg-amber-100 md:border-0 md:border-b-2 md:rounded-none  md:text-orange-500 md:border-orange-600">User Settings</label>
                                </li>

                            </ul>
                        </div>
                        <li className=" flex mx-auto w-14 h-14 md:inset-y-0 md:absolute right-0 md:pl10  -translate-y-6 translate-x-36 sm:translate-x-72 sm:-translate-y-14 md:translate-x-0 md:translate-y-20">

                            <Link to="/cart" class="w-14 h-14">

                                <div className="  flex  mx-auto">
                                    <TiShoppingCart size={"50px"} className=" mt-4 text-orange-500" />
                                    <p className=" bg-orange-500 rounded-full -translate-x-2 text-white text-lg sm:text-xl text-center -ml-4 px-2 pb-4  h-8 w-8">
                                        {getTotalQuantity() || 0}
                                    </p>
                                </div>
                            </Link>
                        </li>

                    </ul>

                    <Link to="/user/settings">
                    <button type="button" className="mt-4 rounded-full text-base  font-bold bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500 ">
                        Back to Settings
                    </button>


                    </Link>

                </div>
                <div class="h-1/12  w-2/12 md:h-3/4 md:my-auto md:-translate-y-16 md:w-1/12 mx-auto grid gap-y-0 justify-center text-xl translate-y-4">

                    <div></div>

                    <div className="m-auto  col-sm-10 sm:flex sm:translate-x-6 ">

                        <p class="mb-5 text-lg   sm:text-xl md:text-2xl mx-auto my-auto font-bold">Enter your Password:</p>

                        <input
                            className=" mb-10 sm:mb-2 sm:mt-20 sm:text-2xl md:text-3xl  mx-3 -translate-y-3 border-b-2 border-black"
                            placeholder="enter current password here"
                            size={23}
                            type="text"
                        />

                    </div>
                    <div className="m-auto sm:-translate-x-2 col-sm-10 sm:flex">
                        <p class="mb-5   text-lg w-64 sm:text-xl md:w-80  md:text-2xl  my-auto font-bold">Enter your New Password:</p>
                        <input
                            className=" mb-10 sm:mt-20 sm:mb-0  mx-3 sm:mx-0  sm:text-2xl md:-translate-x-4 md:text-3xl  -translate-y-3 border-b-2 border-black"
                            placeholder="enter new password here"
                            size={23}
                            type="text"
                        />






                    </div>




                    <div className="m-auto col-sm-10 sm:flex sm:translate-x-3 md:-translate-x-1">

                        <p class="mb-5 text-lg sm:translate-x-2 sm:text-xl sm:w-64 md:w-80 md:text-2xl md:translate-x-6 my-auto font-bold">Confirm New Password:</p>

                        <input
                            className="translate-x-2 mb-10 sm:mb-0 sm:mt-20 sm:text-2xl sm:-translate-x-4 md:text-3xl md:-translate-x-4 -translate-y-4 border-b-2 border-black"
                            placeholder="enter password to confirm"
                            size={22}
                            type={showPassword ? 'text' : 'password'}
                        />
                        <button className="-translate-y-2  w-auto bg-transparent h-auto pl-3 sm:px-0 md:p-0 sm:-translate-x-4 sm:translate-y-6 md:translate-x-2 rounded-full bg-gradient-to-r  text-3xl"
                            onClick={() => setShowPassword(!showPassword)} >
                            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}

                            <i
                                className="fas fa-edit d-block "
                            ></i>
                        </button>





                    </div>


                    <Link to="/user/settings">
                        <button type="button" class="mt-8  h-16 w-80 sm:w-full sm:mt-20 md:mt-auto md:h-full md:w-full rounded-full text-2xl font-bold bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500 "
                            onClick={() => alert("Your new Password has been saved")}>
                            Save New Password

                        </button>
                    </Link>

                </div>






            </div>
            <Footer class="inset-x-0 bottom-0 " />
        </>
    )

}

export default PassChange