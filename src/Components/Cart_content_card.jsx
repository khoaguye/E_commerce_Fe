import React from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import {incrementQuantity,decrementQuantity, removeItem} from '../Redux/cartSlice';
function Cart_content_card({id, title, img, description, price, quantity, promoteText}) {
  const dispatch = useDispatch() 

  return (
    <div className="mt-4 p-3 border w-full h-full md:h-1/2 object-cover ">
        <div className="flex gap-4 md:gap-0">
      <div className="w-[30%] h-full ml-2">
        <img
          src={img}
          alt="your-image-alt"
          className="h-full w-full md:w-[50%] object-cover"
        />
      </div>
      <div className="w-[70%] md:p-4">
        <p className="md:text-[1.5rem] font-bold"> {title}</p>
        <p className="font-bold text-[1.25rem] md:text-[1.5rem] mt-2 text-green-900">$ {price}</p>
        <p className="font-light text-[1rem] md:text-[1.05rem] mt-2 text-yellow-600">{promoteText}</p>
      </div>
    </div>    
        
      <div className="flex justify-between">
        <div className="flex gap-4 mt-3 md:mt-2">
          <AiFillPlusCircle size={"25px"} className="mt-2 text-green-900" onClick={() => dispatch(incrementQuantity(id))} />
          <div className="flex justify-center items-center h-10 w-24 rounded-full bg-light-grey">
            <p className="text-center">{quantity}</p>
          </div>
          <AiFillMinusCircle size={"25px"} className="mt-2 text-green-900"  onClick={() => dispatch(decrementQuantity(id))} />
        </div>

        <div className="flex justify-between mt-3 ">
          <button
            className="flex-1 bg-transparent border border-green-900 text-green-900 font-bold py-2 px-4 md:px-6 rounded transition-colors duration-300 hover:bg-green-900 hover:text-white focus:outline-none focus:bg-green-900 focus:text-white"
            onclick="this.classList.toggle('bg-green-500'); this.classList.toggle('text-white')"
            onClick={() => dispatch(removeItem(id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart_content_card;
