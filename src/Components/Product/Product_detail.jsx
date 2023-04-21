import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AiFillStar,
  AiOutlineHeart,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import {FaTruck, FaClipboard} from "react-icons/fa"
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../Redux/cartSlice";

function Product_detail() {
  const [count, setCount] = useState(1);
  const [detailcontent, setDetailContent]= useState([])
  //const [image, setImage] = useState([]);
  const params = useParams();
  useEffect(() => {
    async function fetchProductContent() {
      try {
        const response = await axios.get(`https://secret-chin-production.up.railway.app/api/product/productDetail/${params.id}`);
         console.log(response.data)
        setDetailContent(response.data);
        //setImage(response.data.images)
      } catch (error) {
        console.error(error);
      }
    }

    fetchProductContent();
   
  }, [params.id]);
//console.log(content)

const dispatch = useDispatch() 
// const handleAddToCart = (event) => {
//   //const { id, title, price, images } = content;
//   //const img = images[0];
//  dispatch(addToCart({ detailcontent, quantity: count}));
//  console.log(detailcontent)
//  //console.log(id, title, images)
// }
const handleAddToCart = (event) => {
  event.preventDefault();
  console.log(count)
  const item = detailcontent.map ((value) => ({
    id: value.id,
    title: value.title,
    price: value.price,
    img: value.images,
    category: value.category,
    quantity: count
  }));
  dispatch(addToCart(...item));
  console.log(item)
}

  return (
    <div className="mt-4">
      {detailcontent.map((item) =>(
    
      <>
      <div className="flex flex-col md:flex-row gap-4">
     
      <div className="order-2 md:order-1 md:mt-[2em] w-full h-[50%]   text-center">
          <img src={item.images} alt = "product" className ="w-full h-full md:max-w-[50%] md:max-h-[50%] md:mx-auto md:my-auto"/> 
        </div>

        <div className="order-1 md:order-2 md:hidden mt-4 md:mt-0">
          <h1 className="text-[1.5em]  font-bold">{item.title}</h1>
          <p className="font-light mt-2">
            {item.description}
          </p>
          <div className="flex mt-2 ">
            <AiFillStar className="text-green-700" />
            <AiFillStar className="text-green-700" />
            <AiFillStar className="text-green-700" />
            <AiFillStar className="text-green-700" />
          </div>
        </div>
        
        <div className="order-3 mt-6 md:ml-[4em]">
        <div className="hidden md:block">
          <h1 className="text-[2.5em] font-bold">{item.title}</h1>
          <p className="font-light mt-2">
            {item.description}
          </p>
          <div className="flex mt-2 md:mt-6 ">
            <AiFillStar className="text-green-700" />
            <AiFillStar className="text-green-700" />
            <AiFillStar className="text-green-700" />
            <AiFillStar className="text-green-700" />
          </div>
        </div>

          <h2 className="text-[1.45rem] font-semibold md:mt-6 ">${item.price}</h2>
          <div className="flex gap-4 mt-3 md:mt-5">
            <AiFillPlusCircle
              size={"25px"}
              className="mt-2 text-green-900"
              onClick={() => setCount(count + 1)}
            />
            <p className="bg-light-grey px-7 text-[1.35rem] py-2 rounded-full">
              {" "}
              {count}
            </p>
            <AiFillMinusCircle
              size={"25px"}
              className="mt-2 text-green-900"
              onClick={() => { if (count > 0)  {
            setCount(count - 1);
              }
    }}
            
            />
          </div>
          <div class="flex justify-between mt-3 md:mt-[3em]">
            <button
              class="flex-1 bg-transparent border border-green-900 text-green-900 font-bold py-2 px-4 rounded transition-colors duration-300 hover:bg-green-900 hover:text-white focus:outline-none focus:bg-green-900 focus:text-white"
              onclick="this.classList.toggle('bg-green-500'); this.classList.toggle('text-white')"
              onClick ={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              class="flex-1 bg-transparent border border-green-900 text-green-900 font-bold py-2 px-4 rounded ml-4 transition-colors duration-300 hover:bg-green-900 hover:text-white focus:outline-none focus:bg-green-900 focus:text-white"
              onclick="this.classList.toggle('bg-green-500'); this.classList.toggle('text-white')"
            >
              Buy Now
            </button>
          </div>
          <div className="mt-6 mb-4 md:mt-[3em] font-light border p-4 rounded-lg">
                <div  className="flex gap-3 ">
                    <FaTruck size= {"20px"} className="mt-2 text-yellow-600"/>
                    <p>Free Delivery <br/> Enter your Postal code for Delivery Avalibility</p>
                </div>
                <div  className="flex gap-3 mt-3 ">
                    <FaClipboard size= {"20px"} className="mt-2 text-yellow-600"/>
                    <p>Free Return  <br/> free 30days Delivery Return</p>
                </div>

          </div>
        </div>
      </div>
      </>
       ))}
    </div>
    
  );
}

export default Product_detail;
