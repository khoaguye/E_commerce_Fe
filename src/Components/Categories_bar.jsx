import React, { useState } from 'react'

function Categories_bar(props) {
  const {isMobile} = props
  const [toggleButton, setToggleButton] = useState(false)

  function handleCategories(){
    if(!isMobile){
    setToggleButton(!toggleButton)
    }
  }
  return (
    <div className='mt-6 md:mt-0'> 
      <div className='flex flex-col md:flex-row gap-6 text-green-900'>
    {/* {!toggleButton  ?  */}
      
       <button className='bg-light-grey border-none rounded-full px-6 py-2 cursor-pointer hover:scale-105 ease-in-out duration-300 md:hidden'
       onClick={handleCategories}
       >All Categories </button>
        <button className='bg-light-grey border-none rounded-full px-6 py-2 cursor-pointer hover:scale-105 ease-in-out duration-300 hidden md:block'
       >All Categories </button>
       
       {/* : <button className='bg-light-grey border-none rounded-full px-6 py-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
       onClick={handleCategories}
       >Categories </button>} */}
       {!toggleButton  && 
        <div className='flex flex-col md:flex-row gap-6 bg-light-grey md:bg-white '>
        <button className='bg-light-grey md:rounded-full border-b-2 border-green-900 px-6 py-2 cursor-pointer hover:scale-105 ease-in-out duration-300'> Technologies</button>
        <button className='bg-light-grey md:rounded-full border-b-2 border-green-900 px-6 py-2 cursor-pointer hover:scale-105 ease-in-out duration-300'> Clothese </button>
        <button className='bg-light-grey md:rounded-full border-b-2 border-green-900 px-6 py-2 cursor-pointer hover:scale-105 ease-in-out duration-300'>Sports</button>
        </div>
      }
      </div>
    
    </div>
  )
}

export default Categories_bar