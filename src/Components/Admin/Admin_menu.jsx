import React, { useState } from "react";
import Product_manage from "./Product_manage";
import Sale_manage from "./Sale_manage";
import Admin_manage from "./Admin_manage";
import {BsFillPersonFill, BsFillBagCheckFill} from "react-icons/bs"
import {HiShoppingCart} from "react-icons/hi"
import {RiMoneyDollarCircleFill} from "react-icons/ri"
import PromoteManage from "./PromoteManage";


function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("admin_manage");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "admin_manage":
        return <Admin_manage />;  
      case "product_manage":
        return <Product_manage />;
      case "sale_manage":
        return <Sale_manage />;
      case "promote_manage":
        return <PromoteManage/>
    }
  };    

  return (
    <div className="grid grid-cols-1  md:grid-cols-4 mt-5  gap-4 md:h-[90vh]">
      <div className="ml-4 border-b md:border-b-0 md:border-r-4 border-light-grey pb-4 md:pr-10">
        <ul  className="flex flex-row md:flex-col md:gap-8 gap-3 justify-around">
        <li 
            className={selectedMenuItem === "admin_manage" ? "active" : ""}
            onClick={() => handleMenuItemClick("admin_manage")}
          >
            <div className="flex items-start gap-2 bg-white text-green-900 hover:bg-green-900 hover:text-white md:px-10 md:py-1 rounded ">
            <BsFillPersonFill size ="20px" className="mt-0.5  hover:text-white"/>
            <p >Admin</p>
            </div>
          </li>
          <li
            className={selectedMenuItem === "product_manage" ? "active" : ""}
            onClick={() => handleMenuItemClick("product_manage")}
          >
             <div className="flex  gap-2 bg-white text-green-900 hover:bg-green-900 hover:text-white md:px-10 md:py-1 rounded ">
            <BsFillBagCheckFill size ="20px" className="mt-0.5 "/>
            <p>Products</p>
            </div>
          </li>
          <li
            className={selectedMenuItem === "sale_manage" ? "active" : ""}
            onClick={() => handleMenuItemClick("sale_manage")}
          >
            <div className="flex gap-2 bg-white text-green-900 hover:bg-green-900 hover:text-white md:px-10 md:py-1 rounded ">
            <HiShoppingCart size ="20px" className="mt-0.5 "/>
            <p>Sale</p>
            </div>
          </li>
         
          <li
            className={selectedMenuItem === "promote_manage" ? "active" : ""}
            onClick={() => handleMenuItemClick("promote_manage")}
          >
             <div className="flex gap-2 bg-white text-green-900 hover:bg-green-900 hover:text-white md:px-10 md:py-1 rounded ">
            <RiMoneyDollarCircleFill size ="20px" className="mt-0.5"/>
            <p>Promotion</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="content col-span-3">{renderContent()}</div>
    </div>
  );
}

export default App;
