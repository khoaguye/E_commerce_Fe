import React, {useState} from 'react'
import Menu from './Menu'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import {ImSearch} from 'react-icons/im'
import {TiShoppingCart} from 'react-icons/ti'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import SearchResult from './Search/SearchResult'
function Header() {
    const [menuToggle, setMenuToggle] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    function handleToggle(){
        setMenuToggle(!menuToggle)
    }

    const cart = useSelector((state) => state.cart)
const getTotalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}
function handleSearchValueChange(e){
  setSearchValue(e.target.value)
  console.log(searchValue)
}
  return (
  
    <div className='w-[100%]'>
    <div className='md:mt-[1em] mt-[2em]  flex md:flex-row flex-col justify-between'>
      <div className="flex w-[100%] justify-between">     
      <Link to = "/">
         <h1 className="text-green-900 md:text-[1.5rem]"><span className=' md:text-[2.5rem] text-[1.75rem] font-bold'>Shop</span> for <span className='md:text-[2.5rem] text-[1.75rem] font-bold'>You</span></h1>   
         </Link> 
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
         <div className='mt-4 md:mt-0 md:w-[200%] w-[100%]'>
        <div className=' flex '>
        <input
          className=" w-[100%] md:w-[100%]  text-lg outline-none  text-black border-b border-black"
          type="text"
          value ={searchValue}
          onChange= {handleSearchValueChange}
          placeholder="What are you looking for ?"
          
        />
         <button
          type="submit"
          className="px-2 font-semibold text-green-900  "
        >
         <ImSearch size={'25px'}/>
        </button> 
        
        </div>
        
        <SearchResult searchValue ={searchValue} />
          </div>
        <Link to ="/cart">
        <div className = "flex md:mt-0 mt-2">
          <TiShoppingCart size = {"30px"} className = "mt-4 text-green-600"/>
          <p className =" bg-green-600 rounded-full text-white -ml-4 px-2 py-0 h-[40%]">
            {getTotalQuantity() || 0}
            </p>
          </div>   
       </Link>
         </div>
         
    </div>
  
  
  )
}

export default Header