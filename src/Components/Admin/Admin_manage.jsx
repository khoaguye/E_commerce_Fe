import React, {useEffect, useState} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Admin_manage() {

  return (
    <div className='px-4 md:px-0  w-[100%]'>
    <div className='flex justify-between text-green-900'>
    <h1 className='0 text-[1.5rem] md:text-[2.5rem] font-bold'>Welcome Group_6</h1>
    <div className='flex gap-3'>
      <Link to ="/">
    <AiFillHome size ={"30px"}/>
    </Link>
    <BsGithub size={"30px"} className= "font-bold"/>
    </div>
    </div>

  <main className=" py-2 flex justify-center flex-wrap ">
  <div className="bg-white w-72 h-96 shadow-md rounded m-3">
    <div className="h-3/4 w-full">
      <img className="w-full h-full object-cover rounded-t" src="https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="piña"/>
    </div>
    <div className="w-full h-1/4 p-3">
      <a href="#" className=" hover:text-yellow-600 text-gray-700">
        <span className="text-lg font-semibold uppercase tracking-wide ">Khoa Nguyen</span>
      </a>
      <div className='flex gap-2 text-blue-900 mt-3'>
      <BsLinkedin className='text-blue-900' />
      <BsGithub className='text-black'/>
      </div>
    </div>
  </div>
  
  <div className="bg-white w-72 h-96 shadow-md rounded m-3">
    <div className="h-3/4 w-full">
      <img className="w-full h-full object-cover rounded-t" src="https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="piña"/>
    </div>
    <div className="w-full h-1/4 p-3">
      <a href="#" className=" hover:text-yellow-600 text-gray-700">
        <span className="text-lg font-semibold uppercase tracking-wide ">Anthony</span>
      </a>
      <div className=' flex gap-2 text-blue-900 mt-3'>
      <BsLinkedin className='text-blue-900' />
      <BsGithub className='text-black'/>
      </div>
    </div>
  </div>
 
  <div className="bg-white w-72 h-96 shadow-md rounded m-3">
    <div className="h-3/4 w-full">
      <img className="w-full h-full object-cover rounded-t" src="https://images.pexels.com/photos/5217960/pexels-photo-5217960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="piña"/>
    </div>
    <div className="w-full h-1/4 p-3">
      <a href="#" className=" hover:text-yellow-600 text-gray-700">
        <span className="text-lg font-semibold uppercase tracking-wide ">Connor</span>
      </a>
      <div className='flex gap-2  text-blue-900 mt-3'>
      <BsLinkedin className='text-blue-900' />
      <BsGithub className='text-black'/>
      </div>
    </div>
    
  </div>
</main>
<main className='flex justify-center flex-wrap'>
   
<div className="bg-white w-72 h-96 shadow-md rounded m-3">
    <div className="h-3/4 w-full">
      <img className="w-full h-full object-cover rounded-t" src="https://images.pexels.com/photos/5217960/pexels-photo-5217960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="piña"/>
    </div>
    <div className="w-full h-1/4 p-3">
      <a href="#" className=" hover:text-yellow-600 text-gray-700">
        <span className="text-lg font-semibold uppercase tracking-wide ">Kade</span>
      </a>
      <div className='flex gap-2 text-blue-900 mt-3'>
      <BsLinkedin className='text-blue-900' />
      <BsGithub className='text-black'/>
      </div>
    </div>
    
  </div>
   
  <div className="bg-white w-72 h-96 shadow-md rounded m-3">
    <div className="h-3/4 w-full">
      <img className="w-full h-full object-cover rounded-t" src="https://images.pexels.com/photos/5217960/pexels-photo-5217960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="piña"/>
    </div>
    <div className="w-full h-1/4 p-3">
      <a href="#" className=" hover:text-yellow-600 text-gray-700">
        <span className="text-lg font-semibold uppercase tracking-wide ">Cesar</span>
      </a>
      <div className='flex gap-2  text-blue-900 mt-3'>
      <BsLinkedin className='text-blue-900' />
      <BsGithub className='text-black'/>
      </div>
    </div>
    
  </div>
</main>
</div>
  )
}

export default Admin_manage
