import React from 'react'
import {ContextProvider} from "../Components/Product/ProductContext"
import Home from "./Home"
import {Routes, Route} from 'react-router-dom'
import Product from './Product'
import Detail_product from './Detail_product'
import Cart from './Cart'
import { Login } from '../Components/Login/Login'
import { Register } from '../Components/Register/Register'
import UserProf from '../Components/UserProfile/UserProf';
import OrderHist from '../Components/UserProfile/Order_Hist';
import Warning from '../Components/UserProfile/Settings/Warning';
import EditProf from '../Components/UserProfile/Settings/Edit_Prof';
import Settings from   '../Components/UserProfile/Settings'
import PassChange from '../Components/UserProfile/Settings/Change_Pass';
import Admin from './Admin'
function Pages() {
  return (
    <ContextProvider>
    <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/product" element={<Product/>}/>
        <Route path ='/product/:id' element ={<Detail_product/>}/>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/admin' element={<Admin/>}/> 
        <Route path = '/user/loginAccount' element={<Login/>}/>
        <Route path = '/user/register' element={<Register/>}/>
        <Route path = '/user/profile' element={<UserProf/>}/>
        <Route path = '/user/orderhistory' element={<OrderHist/>}/>
        <Route path = '/user/settings/editprofile' element={<EditProf/>}/> 
        <Route path = '/user/settings' element={<Settings/>}/>
        <Route path = '/user/settings/changepassword' element={<PassChange/>}/>
        <Route path = '/user/settings/deletewarning' element={<Warning/>}/>
    </Routes>
    </ContextProvider>
  )
}
export default Pages