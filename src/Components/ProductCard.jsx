
import React from 'react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import {addToCart} from '../Redux/cartSlice';
import { Link } from 'react-router-dom'
function ProductCard({id, title, img, category, price, amount}) {
 const dispatch = useDispatch() 
 const handleAddToCart = (event) => {
  event.preventDefault();
  dispatch(addToCart({id, title, img, price,category,amount}));
}
  return (
    <Link to ={"/product/" + id}> 
    <div className="w-[100%] p-6 h-full object-cover flex flex-col gap-4 md:gap-2 relative rounded-lg shadow-lg">
    {/* <div className=' w-full p-2 bg-white rounded-lg  object-cover '> */}
    <AiOutlineHeart size={'25px'} className="absolute top-2 right-4" />
    <div className='w-[100%]  h-full object-cover'>
      <img src={img} className='w-[100%]'/>   
    </div>
    <div>
      <h1 className='text-[1.5rem] font-bold w-full h-full object-cover'>{title}</h1>
    </div>
    {/* <div>
      <p className='font-light '>{description}</p>
    </div> */}
    <p className='font-bold text-[1.5rem]'>$ {price}</p>
    <div className='flex justify-between'>
    <div className='flex '>
      <AiFillStar className='text-green-700' />
      <AiFillStar className='text-green-700' />
      <AiFillStar className='text-green-700' />
      <AiFillStar className='text-green-700' />
    </div>
    <p className='-mt-1 text-[1rem] text-yellow-600'>{amount} items in stock</p>
    </div>
    <button className="rounded-full font-bold px-4 py-2 border-2 border-black bg-green-600 hover:bg-green-900 hover:transition-duration-1000 hover:text-white"
     onClick={handleAddToCart}
    > Add to Cart</button>
  </div>
  </Link>
  )
}

export default ProductCard



