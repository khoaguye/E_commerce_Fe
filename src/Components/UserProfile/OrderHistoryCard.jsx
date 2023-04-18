import React from 'react'
import {
    AiFillStar,
    AiOutlineHeart,
    AiFillPlusCircle,
    AiFillMinusCircle,
  } from "react-icons/ai";

function OrderHistoryCard({id, title, img,  price, quantity, orderStatus, date}) {
  return (
    <div className='mt-3 '>
      <div className="mt-4 p-5 border w-full h-full md:h-1/2 object-cover ">
        <div className="flex gap-4 md:gap-0">
      <div className="w-[30%] h-full ml-2">
        <img
          src={img}
          alt="your-image-alt"
          className="h-full w-full md:w-[50%] object-cover"
        />
      </div>
      <div className="w-[70%] md:p-4">
        <p className="md:text-[1.5rem] font-bold text-green-900"> {title}</p>
        <p className="font-bold text-[1.25rem] md:text-[1.5rem] mt-2 text-green-900">$ {price}</p>
      </div>
    </div>    
        
          <div className=" mt-5 md:mt-2  flex flex-col md:flex-row justify-around items-start md:items-center h-10 w-50  bg-white md:bg-light-grey ">
            <p className="text-center text-green-900 "> <span className ="font-bold"> Quantity</span> : {quantity}</p>
            <p className="text-center text-green-900 font-bold ">Order Status: {orderStatus}</p>
            <p className="text-center text-green-900 font-bold ">Date Order: {date}</p>

          </div>
      </div>
    </div>

  )
}

export default OrderHistoryCard
