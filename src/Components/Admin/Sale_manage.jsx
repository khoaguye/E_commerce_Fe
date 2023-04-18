import React,{useState} from 'react'
import CurrentOrderMangement from './CurrentOrderMangement'
import HistoryOrderManagement from './HistoryOrderManagement'

function Sale_manage() {
  const [buttonToggle, setButtonToggle] = useState(false)
  const [mobileToggle, setMobileToggle] = useState(false)

  function handelButtonCurrent (){
    setButtonToggle(false)
  }
  function handelButtonHistory (){
    setButtonToggle(true)
  }
  return (
    <div className='px-2 flex flex-col justify-center items-center  '>
      <div className=' flex gap-2  '>
        <button className='bg-green-600 hover:bg-green-900 px-4 py-2 text-white font-bold rounded' onClick = {handelButtonCurrent}> All Orders Management </button>
        <button className='bg-green-600 hover:bg-green-900 px-4 py-2 text-white font-bold rounded' onClick = {handelButtonHistory}>History Orders Management </button>
      </div>
      <div>
        {!buttonToggle ? 
          <CurrentOrderMangement />
      :   <HistoryOrderManagement />}
      </div>
    </div>
  )
}

export default Sale_manage

