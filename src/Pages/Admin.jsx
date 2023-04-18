import React from 'react'
import Admin_menu from '../Components/Admin/Admin_menu'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product_manage from '../Components/Admin/Product_manage';
import Sale_manage from '../Components/Admin/Sale_manage';
function Admin() {
  return (
   
    <div className="md:px-[6em]">
      <div className="menu">
        <Admin_menu/>
      </div>
  
    </div>

  )
}

export default Admin
    