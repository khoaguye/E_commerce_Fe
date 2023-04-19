import React, {useState, useEffect} from 'react'   
import ProductCard from './ProductCard'
import axios from 'axios'
function Product() {

const [content, setContent] = useState([]);     
  useEffect(() => {
     async function fetchProductContent() {
       try {
         const response = await axios.get('/product/productContent');
          console.log(response.data)
         setContent(response.data);
        
       } catch (error) {
         console.error(error);
       }
     }
 
     fetchProductContent();
    
   }, []);

   console.log(content)
  return (
    <div className="mt-12 pt-4">
        <h1 className='text-green-900 text-[1.5rem] font-bold'>Happy Shopping!!</h1>
           
        <div className="mt-4 grid grid-cols-1 md:p-10 p-6 md:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto ">
        {content.map((items) => ( 
            <ProductCard
                id = {items.id}
                img = {items.images}
                title = {items.title}
                category = {items.category}
                price= {items.price}
                amount = {items.amount}
           />
           ))} 
        </div>
    
    </div>
  )
}

export default Product