
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";

import Menu from "../Components/Menu";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";

function Home() {
  const[windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  const [isMobile, setIsMobile]= useState(false)

  useEffect(()=>{
    const handleSize= ()=>{
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleSize);
    handleSize();
    return () =>window.removeEventListener("resize", handleSize)
  },[])
  useEffect(()=>{
    console.log(windowSize)
    if(windowSize.width < 500){
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
  },[windowSize])
  return (
    <div>
    <div className="px-[2em] md:px-[6em]">
      <div className="flex">
        <Navbar />
        <div className="hidden md:block">
          <Menu />
        </div>
      </div>
      <Product/>
    </div> 
    <Footer/>
    </div>
  );
}

export default Home;
