// CategoryContext.js
//import { createContext } from 'react';
import React, {useState, useContext} from "react"
const ProductContext = React.createContext();

const ContextProvider = ({children}) =>{
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [content, setContent] = useState([]);
    const [subContent, setsubContent] = useState([])
    return(
    <ProductContext.Provider value={{selectedCategory, setSelectedCategory, 
    content, setContent, subContent, setsubContent}}>
        {children}
    </ProductContext.Provider>
)}
export  {ProductContext, ContextProvider};
