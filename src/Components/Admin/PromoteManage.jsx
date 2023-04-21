import React, { useState, useEffect } from 'react'
import { ImSearch } from 'react-icons/im'
import axios from 'axios';
function Promote_manage() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(""); 
  const [idShow, setIdShow] = useState(false)
  const [toggleEdit, setToggleEdit] = useState(false)
  const [code, setcode] = useState("");
  const [category, setCategory] = useState("");
  const [price_off, setPriceoff] = useState();
 

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const response = await axios.get('https://secret-chin-production.up.railway.app/api/promote/allPromotions');
        setData(response.data);
        //setImgURL(response.data.products.images[0])
      } catch (error) {
        console.error(error);
      }
    }

    fetchAllProducts();
  },);

  function handleIdChange(e){
    setId(e.target.value)
  }

  function handlecodeChange(e) {
    setcode(e.target.value);
  }

  function handleCategoryChange(e) {
    setCategory(e.target.value);
    console.log(category)
  }
  function handlePriceoffChange(e) {
    setPriceoff(e.target.value);
    console.log(price_off)
  }




  const productContent = {
    id: id,
    code: code,
    category: category,
    price_off: price_off,
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const add = await axios.post('/promote/addPromo', productContent);
      setData([...data, add.data]);
      console.log(add.data)
    } catch (error) {
      console.error(error);
    }
  setcode("");
  setCategory("");
  setPriceoff("")
  setCategory("")

}


function handleEdit(index) {
  const item = data[index-1];
  setId(index)
  setcode(item.code)
  setCategory(item.category)
  setPriceoff(item.price_off );
  setToggleEdit(true)
  setIdShow(!idShow)
}
const handleUpdate = async (e) =>{
  e.preventDefault();
  try {
    const update = await axios.put('/promote/updatePromo', productContent);
      setData([...data, update.data]);
      console.log(update.data)
  } catch (error) {
    console.error(error);
  }
  console.log(productContent)
  setToggleEdit(false)
  setIdShow(!idShow)
} 
function handleDelete(index) {
  axios.delete("/promote/deletePromotion", { data: { id: index } })
  .then(response => {
    console.log(response.data.message);
  })
  .catch(error => {
    console.log(error);
  });
  const newData = [...data];
  newData.splice(index, 1);
  setData(newData);
}

return (
  <div className='px-4 md:px-0 '>
    <div className='flex flex-col md:flex-row justify-between'>
      <h1 className='text text-[1.5rem] text-green-900 font-semibold'>Promote Code Management System</h1>
      <div className='flex mt-2 md:mt-0 md:w-[50%] '>
        <input
          className=" w-[100%] md:w-[100%]  text-lg outline-none  text-black border-b border-black"
          type="text"
          placeholder="What are you looking for ?"

        />
        <button
          type="submit"
          className="px-2 font-semibold text-green-900  "
        >
          <ImSearch size={'25px'} />
        </button>
      </div>
    </div>

    <div className="p-4 md:p-0 md:w-100 mt-4">
      <form  className="grid grid-cols-1 md:grid-cols-3 md:gap-3 mx-auto">
       {idShow && 
      <label className="block mb-2">
          Id:
          <input
            className="block w-full border border-gray-400 rounded py-2 px-3"
            type="number"
            value={id}
            onChange={handleIdChange}
          /> 
        </label>
  }
<label className="block mb-2">
          Code:
          <input
            className="block w-full border border-gray-400 rounded py-2 px-3"
            type="text"
            value={code}
            onChange={handlecodeChange}
          />
        </label>
        <label className="block mb-2">
          Category:
          <input
            className="block w-full border border-gray-400 rounded py-2 px-3"
            type="text"
            value={category}
            onChange={handleCategoryChange}
          />
        </label>
        <label className="block mb-2">
          Priceoff (%):
          <input
            className="block w-full border border-gray-400 rounded py-2 px-3"
            type="number"
            value= {price_off} 
            onChange={handlePriceoffChange}
          />
        </label>
    
        {!toggleEdit ?
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4"
          type="submit"
          onClick={handleSubmit}>
          Add Item
        </button>
        :   
        <button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4"
        type="submit"
        onClick={handleUpdate}>
        Update Item
      </button>
      }
      </form>

      <div className="overflow-x-scroll">
        <table className="w-full mt-4">  
          <thead className='bg-green-900 text-white border border-black'>
            <tr><th className=" md:table-cell border border-white">Id</th>
              <th className=" md:table-cell border border-white">Code</th>
              <th className=" md:table-cell border border-white">Category</th>
              <th className=" md:table-cell border border-white">Priceoff</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-white hover:bg-blue-300">
                <td className="p-2">{item.id}</td>
                <td className="p-2">{item.code}</td>
                <td className="p-2">{item.category}</td>
                <td className="p-2">{item.price_off}</td>
                <td className="p-2 flex justify-center items-center gap-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)
            }

export default Promote_manage
