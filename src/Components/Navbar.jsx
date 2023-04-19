import React, {useState} from 'react'
import Menu from './Menu'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import headPhone from "./a.png"
import { Link } from 'react-router-dom'
import backgroundImage from './sahara-background.png';
import bannerImg from './banner.png'
import './Navbar.css' 
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

    <div className="h-[90%] mt-4 bg-sand "
     style={{backgroundImage: `url(${bannerImg})`,
     backgroundPosition: 'center',
     backgroundSize: 'contain',
     backgroundRepeat: 'no-repeat',}}>
      <div className='float-up w-[80%] mx-auto my-auto pt-[2em] h-[60%]'>
      <h1 className=" text-[5rem] md:text-[6rem] font-bold text-yellow-600 mt-8"> Sahara</h1>
      <p className =" hidden md:block font-light  lg:text-[1.5rem] md:text-[0.25rem]"> Your one-stop shop for all your needs, at affordable <br/> prices for every budget. Your happiness is the  reason <br/>for our success</p>
       <button className=" ml-[3em] md:ml-0 mt-8 bg-white text-black font-semibold py-2 px-4 rounded-md shadow-md hover:bg-gray-200">
          Shop Now
        </button>
        </div>
    </div>
 
    </div>
  )
}
export default Navbar