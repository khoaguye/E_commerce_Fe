import { useState, useEffect } from "react";
import React from 'react'
import axios from 'axios'

function CurrentOrderMangement() {
  //const orderStatus = ["ship", "delivered"]
  const [data, setData] = useState([]);
  const [orderStatuses, setOrderStatuses] = useState([]);
  useEffect(() => {
    async function fetchAllOrders() {
      try {
        const response = await axios.get('https://secret-chin-production.up.railway.app/api/order/historyOrder');
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
  }

 
console.log(orderStatuses)
  return (
    <table className="table-fixed w-full mt-6">
    <thead className="bg-green-900 text-white">
      <tr>
        <th className="w-1/6 border border-white">Username</th>
        <th className="w-1/6 border border-white">Date</th>
        <th className="w-1/6 border border-white">Quantity</th>
        <th className="w-1/6 border border-white">Order Status</th>
        <th className="w-1/6 border border-white">Price</th>
      </tr>
    </thead>
    <tbody overflow-x-scroll overflow-y-scroll >
      {data.map((order, index) => (
        <tr key={order.id} className="bg-white hover:bg-blue-300"  >
          <td className="border border-green-900 pl-2">{order.username}</td>
          <td className="border border-green-900 pl-2">{order.order_date}</td>
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
            >
              <option value={orderStatuses[index]}>{orderStatuses[index]} </option>
              <option value="delivered">delivered</option>
            </select>
          </td>
          <td className="border border-green-900 pl-2">${order.product_price}</td>
         
        </tr>
       ))} 
    </tbody>
  </table>
  )
}

export default CurrentOrderMangement

