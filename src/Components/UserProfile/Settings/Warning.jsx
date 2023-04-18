import React, { useEffect, useState } from "react";
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Footer from '../../Footer';


function Warning() {
      return (
            <>
                  <div class="bg-amber-100 w-screen h-screen">


                        <div class="justify-center grid grid-cols-1 h-2/3 w-2/3 translate-y-40 mx-auto">

                              <label class="h-full mx-auto w-auto font-bold text-left text-2xl ">Are you sure you want to delete your account?</label>

                              <Link to="/">
                                    <button type="button" class=" h-full w-full text-xl sm:text-2xl font-bold rounded-full bg-orange-500 hover:bg-red-700 hover:text-white"
                                          onClick={() => alert("Your Account has been Successfully Deleted")}>
                                          Confirm Delete
                                    </button>
                              </Link>

                              <div></div>



                              <div></div>


                              <Link to="/user/settings">
                                    <button type="button" class=" h-full w-full rounded-full text-xl sm:text-2xl font-bold bg-gradient-to-r bg-orange-500 hover:from-orange-600 hover:to-rose-500 ">
                                          Cancel
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