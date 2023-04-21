import React, { useContext } from 'react' //new
import { AuthContext } from '../context/authContext'; //new
import { Link } from 'react-router-dom'

const Menu = () => {
  const { currentUser, logout } = useContext(AuthContext); //new

  //console.log(currentUser)
  return (

    <div className=" bg-light-grey md:bg-white w-[60%] md:h-[5vh] h-[50vh] p-4 mt-12 md:mt-2 absolute md:right-[6em] right-0 z-50 fixed ">
      <ul className='text-[1.5rem] flex flex-col md:flex-row justify-between'>
       
        {currentUser ? ( 
           <Link to = "/user/profile">
          <li className="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Hello, {currentUser?.data.fname} !</li>
          </Link>
        ):(<li className="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300"></li>)}
        <Link to="/product">
          <li className="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Products</li>
        </Link>
        <li className="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Deals</li>
        {
          currentUser?.data.role === "admin" ? 
          <Link to = "/admin" >
          <li className="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">{currentUser?.data.role}</li>
          </Link> :
           <li className="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">{currentUser?.data.role}</li>
        }
        
        {/* <Link to="/user/login">
          <li className="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300">Sign In</li>
        </Link> */}

        {/* <span>{currentUser?.username}</span> */}
        {currentUser ? (
          <li className="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300" onClick={ logout }>Logout</li>
        ) : (
          <Link className="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300" to="/user/login">
            Login
          </Link>
        )}
        {/* Make some logout button/option/dropdown */}
        <li className ="mb-4 cursor-pointer hover:scale-105 ease-in-out duration-300"></li>
       
      </ul>
    </div>
  )
}

export default Menu;