import { useState, useEffect } from "react";
import React from 'react'
import axios from 'axios'

function CurrentOrderMangement() {
  //const orderStatus = ["ship", "delivered"]
  const [data, setData] = useState([]);
  const [idOrder, setOrderId] = useState();
  const [orderStatuses, setOrderStatuses] = useState([]);
  const [currentOrderStatus, setCurrentOrderStatus] = useState();
  useEffect(() => {
    async function fetchAllOrders() {
      try {
        const response = await axios.get('https://secret-chin-production.up.railway.app/api/order/allOrder');
        setData(response.data);
        setOrderStatuses(response.data.map(order => order.order_status))
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllOrders();
  },);

  function handleStatus(e, index) {
    const newStatuses = [...orderStatuses]; // create a copy of the orderStatuses array
    newStatuses[index] = e.target.value; // update the status of the current order
    setOrderStatuses(newStatuses); // update the state variable
    setCurrentOrderStatus(newStatuses[index])
  
  }

  //function used to get the orderId when select on that row
  function handleEdit(orderId){
    setOrderId(orderId)
    console.log("id order " + idOrder)
  }
  // function used to updated the order status
  
  const handleUpdate = async (e) =>{
    e.preventDefault();
    try {
      const update = await axios.put('https://secret-chin-production.up.railway.app/api/order/updateOrder',
      {
        id : idOrder,
        orderStatus: currentOrderStatus
      }
      );
        setData([...data, update.data]);
        console.log(update.data)
    } catch (error) {
      console.error(error);
    }
    console.log(currentOrderStatus)
   }
console.log(data)
// Delete function used to delete the order
function handleDelete(index) {
  axios.delete("https://secret-chin-production.up.railway.app/api/order/deleteOrder", { data: { id: index } })
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
    <table className="table-fixed w-full mt-6 border border-green-900">
    <thead className="bg-green-900 text-white">
      <tr>
        <th className="w-1/6 border border-white">Username</th>
        <th className="w-1/6 border border-white">Date</th>
        <th className="w-1/6 border border-white">Quantity</th>
        <th className="w-1/6 border border-white">Order Status</th>
        <th className="w-1/6 border border-white">Price</th>
        <th className="w-1/6 border border-white">Actions</th>
      </tr>
    </thead>
    <tbody overflow-x-scroll overflow-y-scroll  >
      {data.map((order, index) => (
        <tr key={order.id} className="bg-white hover:bg-blue-300"  >
          <td className="border border-green-900 pl-2">{order.username}</td>
          <td className="border border-green-900 pl-2 text-sm">{order.order_date}</td>
          <td className="border border-green-900 pl-2">
            <input
             className="bg-white hover:bg-blue-300"
              type="number"
              min="0"
              value={order.total_quantity}
              
            />
          </td>
          <td className="border border-green-900 pl-2">
          <select
              // value={orderStatuses[index]}  // get the status of the current order
              onChange={e => handleStatus(e, index)} // pass the index of the current order to handleStatus
              onClick = {() => handleEdit(order.orderId)}
            >
              <option value={orderStatuses[index]}>{orderStatuses[index]} </option>
              <option value="delivered">Delivered</option>
            </select>
          </td>
          <td className="border border-green-900 pl-2">${order.product_price}</td>
        
          <td className="border border-green-900 p-1 flex justify-center items-center gap-2">
            <button className="bg-green-500 hover:bg-green-700 px-1 text-white font-bold rounded "
            onClick={() => handleDelete(order.orderId)}>Delete</button>
            <button className="bg-green-500 hover:bg-green-700 px-1 text-white font-bold rounded " onClick= {handleUpdate} >Update</button>
          </td>

        </tr>
       ))} 
    </tbody>
  </table>
  )
}

export default CurrentOrderMangement
