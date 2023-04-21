
import React, {useState, useEffect, useContext} from 'react'
import ProductCard from '../ProductCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {ProductContext} from './ProductContext'

function Product_Contain() {
     const {content, setContent} = useContext(ProductContext);  
     const {subContent, setsubContent} = useContext(ProductContext)
     const { selectedCategory, setSelectedCategory } = useContext(ProductContext);  
     
     console.log(selectedCategory)
     useEffect(() => {
          async function fetchAllProducts() {
               try {
                 const response = await axios.get('https://secret-chin-production.up.railway.app/api/product/allProduct');
                 setContent(response.data);
                 setsubContent(response.data);
               
               } catch (error) {
                 console.error(error);
               }
          }
          if (selectedCategory === 'All Categories') {
           
            fetchAllProducts();
          } else {
          async function fetchProducts() {
               try {
                
                 const response = await axios.get(`https://secret-chin-production.up.railway.app/api/product/productcategory/${selectedCategory}`);
                 setContent(response.data);
                 setsubContent(response.data);
               } catch (error) {
                 console.error(error);
               }
             }
            
            fetchProducts();
          }
        
        },[selectedCategory]);
    
  return (
    <div className="mt-4">
    <div className="mt-4 grid grid-cols-1 md:p-10 p-6 md:grid-cols-3  md:gap-6 mx-auto">
    {subContent.map((items) => ( 
     <div > 
         
            <ProductCard
                id = {items.id}
                img = {items.images}
                title = {items.title}
                category = {items.category}
                price= {items.price}
                amount = {items.amount}
           />
     
     </div>
           ))} 
    </div>    
</div>
  )
}


export default Product_Contain