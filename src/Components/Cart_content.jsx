
import React, { useState, useEffect, useContext } from "react";
import Cart_content_card from "./Cart_content_card";
import DeliveryMethod from "./DeliverryMethod";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from "axios";
import {updatePrice, clearCart} from '../Redux/cartSlice';
import { useDispatch } from 'react-redux';
import { AuthContext } from "../context/authContext";
function Cart_content() {
  const [selectedOption, setSelectedOption] = useState("credit-card");
  const [promoteCode, setPromoteCode] = useState([]); 
  const [annouce, setAnnouce ] = useState("")
  const [inputs, setInputs] = useState({
    expiryDate: "",
     cvv: "",
     cardNumber: "",
     nameOnCard: "",
   })
 const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch() 
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform payment method submission logic
   
  };

  const cart = useSelector((state) => state.cart)
   console.log(cart)

   //handle input field:
   const handleInputChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};
  

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    let price = 0
    let tax = 0
    let taxRound =0
    cart.forEach(item => {
      totalQuantity += item.quantity
      price += item.price * item.quantity
      tax =  price * 0.08
      taxRound = tax.toFixed(2)
      totalPrice = price + tax
    })
    return {price, totalPrice, totalQuantity, taxRound}
  }
  // get the date time:
  const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, '0');
const day = now.getDate().toString().padStart(2, '0');
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const datetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
console.log(datetime);
console.log(currentUser)
  const orderContain = {
    uid : currentUser?.data.id,
    date: datetime,
    orderStatus: "Shiped",
    cart: cart.map( item => ({productId: item.id, quantity: item.quantity}))
  }
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if(inputs.cardNumber === "" ){
      setAnnouce("Missing card number")
      // setErr.err = "erro0r"
    }
    else if(inputs.expiryDate === "" ){
      setAnnouce("Missing expiryDate")
    }
    else if(inputs.cvv === "" ){
      setAnnouce("Missing CVV")

    }
    else if(inputs.nameOnCard === "" ){
      setAnnouce("Missing name on card")
    }
    else{ 
    try {
      const response = await fetch("https://secret-chin-production.up.railway.app/api/order/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderContain),
      });
      const data = await response.json();
      console.log(data);
      setAnnouce("Your Order is already placed")
      dispatch(clearCart());
    } catch (error) {
      console.error(error);
      setAnnouce("Error with payment")
    }
  }
  };

    
  useEffect(() => {
     async function fetchPromoteCode() {
       try {
         const response = await axios.get('https://secret-chin-production.up.railway.app/api/promote/allPromotions');
          console.log(response.data)
         setPromoteCode(response.data);
         console.log(promoteCode)
        
       } catch (error) {
         console.error(error);
       }
     }
 
     fetchPromoteCode();
    
   }, []);

   let couponApplied = false;
    // Function handle apply coupon 
    const handleApplyCoupon = (() => {
      if (couponApplied) {
        setAnnouce("Coupon has already been applied");
        return;
      }

      const updatedCart = cart.map(item => {
        const promotion = promoteCode.find(p => p.category === item.category);
        let promoteText = "";
        if (promotion) {
          const discountPrice = item.price * (1 - promotion.price_off / 100);
          const discountPriceRound = discountPrice.toFixed(0);
          promoteText = "The Product is Reduced " + promotion.price_off + "% by the code: " + promotion.code;
          //setPromoteText("The Product is Reduced by the code: " + promotion.code)
          console.log(promoteText)
          return { ...item, price: discountPriceRound, promoteText };
        } else {
          return {...item, promoteText};
        }
      });
      couponApplied = true;
      dispatch(updatePrice(updatedCart));
    });

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mt-[2em] gap-4">
      <div className=" md:col-span-3 ">
        <div className="border p-3 md:p-5 ">
          <div className = "flex justify-between">
          <h1 className="text-[1rem] md:text-[2rem] font-bold text-yellow-600">
            YOUR CARTS
          </h1>
          <h2 className="mt-2" onClick = {handleApplyCoupon}>
            Apply Coupon
          </h2>
          </div>
          {cart?.map((item) => (
          <Cart_content_card 
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            price={item.price} 
            quantity={item.quantity}
            promoteText={item.promoteText}
          />
          ))}
           
        </div>
        <div className="border mt-4 p-3 md:p-5">
          <h1 className="text-[1rem] md:text-[2rem] font-bold text-yellow-600">
            PAYMENT METHODS
          </h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">Payment Method</h2>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="credit-card"
                  name="paymentMethod"
                  value="credit-card"
                  checked={selectedOption === "credit-card"}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label htmlFor="credit-card" className="ml-3">
                  Credit Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={selectedOption === "paypal"}
                  onChange={handleOptionChange}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <label htmlFor="paypal" className="ml-3">
                  PayPal
                </label>
              </div>
            </div>
            {selectedOption === "credit-card" && (
              <div>
                <h2 className="text-lg font-medium mb-2">
                  Credit Card Information
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      onChange = {handleInputChange}
                      className="form-input w-full border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="expiryDate"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      onChange = {handleInputChange}
                      className="form-input w-full border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      onChange = {handleInputChange}
                      className="form-input w-full border"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nameOnCard"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="nameOnCard"
                      name="nameOnCard"
                      onChange = {handleInputChange}
                      className="form-input w-full border"
                    />
                  </div>
                </div>
              </div>
            )}
            {selectedOption === "paypal" && (
              <div>
                <h2 className="text-lg font-medium mb-2">PayPal Information</h2>
                <div>
                  <p>
                    Please login to your PayPal account to complete the payment.
                  </p>
                </div>
              </div>
            )}
           
          </form>
        </div>
        <DeliveryMethod />
      </div>

      <div className="md:col-span-1 ">
        <div className=" p-3 md:p-5 border bg-white rounded-lg shadow-lg">
          <h1 className="text-[1rem] md:text-[2rem] font-bold text-yellow-600">
            Subtotal <span className="text-[1rem] -ml-2">({getTotal().totalQuantity} items)</span> 
          </h1>
          <div className="flex justify-between font-light mt-4">
            <div >
             <p>SubTotals: </p>
             <p>Tax(8%): </p> 
             </div>
                <div className= "flex flex-col flex-end">
                <p> $ {getTotal().price}.00</p>
                 <p>+ $ {getTotal().taxRound} </p>
                </div>

        </div>
        <hr/>
        <div className="flex justify-between font-light mt-4">
            <div >
             <p>Your Totals: </p>
             </div>
                <div>
                <p> $ {getTotal().totalPrice} </p>
                </div>

        </div>
        <div className="mt-6">
              <button
                type="submit"
                className="bg-green-600 w-[100%] hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handlePlaceOrder}
             >
                Pay Now
              </button>
              
            </div>
           
        </div>
        <Link to = "/product">
        <button className = "ml-2 mt-4 bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"> Continue Shopping</button>
        </Link>

        <p className="text-red-600 font-bold my-4 ">{annouce}</p>
      </div>
    </div>
  );
}

export default Cart_content;


