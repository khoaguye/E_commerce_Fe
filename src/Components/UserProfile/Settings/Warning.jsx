import React, { useEffect, useState, useContext } from "react";
import { TiShoppingCart } from 'react-icons/ti'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Footer from '../../Footer';
import axios from "axios";
import { AuthContext } from "../../../context/authContext";


function Warning() {
      const navigate = useNavigate();
      const { currentUser } = useContext(AuthContext);
      const [err, setErr] = useState(null);

      const [inputs, setInputs] = useState({
            username: ""
        });

        const handleChange = (e) => {
            setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
        };

      const handleClick = async (e) => {
            alert(currentUser.data.username)
            try {
                await axios.delete(`/user/deleteUser/${currentUser.data.username}`, inputs);
                await axios.post(`/user/logout`);
                localStorage.clear();
                window.location.reload(true);
            //     navigate("/");
                alert("Your Account has been Successfully Deleted")
                setErr("Success! Who's a good boi!");
                
            } catch (err) {
                alert("There was a problem deleting your account. Make sure you are logged in.")
                setErr(err.response.data);
                navigate("/");
            }
    
        };
      return (
            <>
                  <div class="bg-amber-100 w-screen h-screen">


                        <div class="justify-center grid grid-cols-1 h-2/3 w-2/3 translate-y-40 mx-auto">

                              <label class="h-full mx-auto w-auto font-bold text-left text-2xl ">Are you sure you want to delete your account?</label>

                               {/* <input
                                className="translate-x-4 sm:-translate-y-24 sm:translate-x-4 md:-translate-x-4 px-auto mb-0 sm:mb-0 sm:mt-20 sm:text-2xl md:text-2xl -translate-y-4 border-b-2 border-black"
                                size={21}
                                id="username"
                                type="text"
                                placeholder="Enter Username"
                                name="username"
                                onChange={handleChange}

                            /> */}
                                    <button type="button" class=" h-full w-full text-xl sm:text-2xl font-bold rounded-full bg-orange-500 hover:bg-red-700 hover:text-white"
                                          onClick={handleClick}
                                          >
                                          Confirm Delete
                                    </button>
                                    {err && err}
                              

                              <div></div>



                              <div></div>


                              <Link to="/">
                                    <button type="button" class=" h-full w-full rounded-full text-xl sm:text-2xl font-bold bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500 ">
                                          Home Page
                                    </button>
                              </Link>
                              <div></div>


                              <div></div>

                        </div>

                  </div>
                  <Footer class="inset-x-0 bottom-0" />
            </>
      )

}

export default Warning