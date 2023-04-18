import React, {useState} from 'react'
import Menu from './Menu'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import headPhone from "./a.png"
import { Link } from 'react-router-dom'
import backgroundImage from './sahara-background.png';
function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false)
    
    function handleToggle(){
        setMenuToggle(!menuToggle)
    }
  return (
    <div className=' md:h-[80vh] w-[100%]'>

    <div className='md:mt-[1em] mt-[2em]  flex justify-between '>
        <h1 className="text-green-900 md:text-[1.5rem]"><span className=' md:text-[2.5rem] text-[1.75rem] font-bold'>Sahara</span> for <span className='md:text-[2.5rem] text-[1.75rem] font-bold'>You</span></h1>
    
        {
            !menuToggle ?
         <GiHamburgerMenu size={"30px"} className='mt-2 text-green-900  md:hidden'
            onClick={handleToggle}
         /> : 
            <BsFillArrowRightSquareFill size={"30px"} className='mt-2 text-green-900'
            onClick={handleToggle}/>
        }
         {
            menuToggle && <Menu />
         }
     </div>

        {/* <div className ="bg-light-pink mt-[2em] object-contain w-[100%] h-[80%] md:h-[80%] text-center p-5 flex flex-col justify-around md:flex-row overflow-hidden">
        <div className=" md:h-[50%] md:my-auto">
            <h1 className= " md:text-[4rem] text-[1.5rem] text-green-900 text-bold">Welcome To Shop for You</h1>
            <p className = "md:text-[1.5rem]" > ALL item is sale up to 50%</p>
            <Link to = "/product">
            <button className = "bg-green-900 rounded-full border px-10 md:text-[1.25rem] py-2 text-white text-strong mt-3"> Buy Now</button>
            </Link>
            </div> 
            <img src={headPhone} alt="headphone" className=" mx-auto w-[140px] md:w-[450px]"/>
        </div> */}
                <div
      className=" mt-10 relative bg-center bg-cover h-[70%] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute top-1/4 w-full text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
          Welcome to Sahara
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl font-medium">
          Your one-stop shop for all your fashion needs
        </p>
        <button className="mt-8 bg-white text-black font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-200">
          Shop Now
        </button>
      </div>
    </div>
         
    </div>
  )
}
export default Navbar