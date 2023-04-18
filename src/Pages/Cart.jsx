import React from 'react'
import Footer from '../Components/Footer';
import Header from "../Components/Header";
import Cart_content from '../Components/Cart_content'

function Cart() {
  return (
    <>
    <div className="md:px-[6em]">
      <div className="px-[2em]">
        <Header />
        <Cart_content/>
       
      </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default Cart