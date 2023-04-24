import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Filter_bar from "../Components/Product/Filter_bar";
import Product_Contain from "../Components/Product/Product_Contain";
import { AiOutlineDown } from 'react-icons/ai'
import ProductContext from "../Components/Product/ProductContext";
function Product() {
  // const [selectedCategory, setSelectedCategory] = useState('All Categories');
  // const [content, setContent] = useState([]);
  // const [subContent, setsubContent] = useState([])
  const [filterMobile, setFilterMobile] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  useEffect(() => {
    console.log(windowSize);
    if (windowSize.width < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  function handleFilterDropDown() {
    setFilterMobile(!filterMobile)
  }

  useEffect(() => {
    if (filterMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [filterMobile]);
  return (
    <div className="md:px-[6em]">
      {/* <ProductContext.Provider value={{ selectedCategory, setSelectedCategory, content, setContent, subContent, setsubContent }}> */}
        <div className="px-[2em]">
          <Header />
        </div>
        <div className="mt-4 px-[2em] md:hidden flex gap-2"
          onClick={handleFilterDropDown}
        >
          <p>Filter</p>
          <AiOutlineDown className="mt-1 font-bold" />
        </div>
        <div>
          {" "}
          {!isMobile ? (
            <div className="grid grid-cols-4 ">
              <div>
                <Filter_bar />
              </div>
              <div className="col-span-3 ">
                <Product_Contain />
              </div>
            </div>
          ) : (
            <div className="relative">
              <div className="overflow-y-scroll">
                <Product_Contain />
              </div>
              {filterMobile && (
                <div className="absolute top-0 left-0 h-full w-full z-10 bg-white"
               >
                  <Filter_bar />
                </div>
              )}
              <button
                className="fixed bottom-0 right-0 m-4 p-2 rounded-full bg-gray-700 text-white"
                onClick={handleFilterDropDown}
              >
                
              </button>
              {filterMobile && (
                <div className="fixed inset-0 bg-black opacity-20 z-5" onClick={handleFilterDropDown}></div>
              )}
            </div>
          )}
        </div>
      {/* </ProductContext.Provider> */}
    </div>

  );
}

export default Product;
