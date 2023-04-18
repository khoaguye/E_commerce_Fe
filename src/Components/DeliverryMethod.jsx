import React, { useState } from 'react';


const DeliveryMethod = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    phone: '',
  });
  const [deliveryMethod, setDeliveryMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate customer info and delivery method
    // send data to server for processing
  };

  return (
    <div className="p-4 border mt-4 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-yellow-600">DELIVERY METHODS</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input mt-1 block w-full rounded-md border shadow-s "
            value={customerInfo.name}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, name: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="form-input mt-1 block w-full rounded-md border shadow-sm"
            value={customerInfo.address}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, address: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="form-input mt-1 block w-full rounded-md border shadow-sm "
            value={customerInfo.phone}
            onChange={(e) =>
              setCustomerInfo({ ...customerInfo, phone: e.target.value })
            }
          />
        </div>
        <div className="mb-4">
          <p className="block text-gray-700 font-bold mb-2">Delivery Method</p>
          <div className="flex">
            <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            className="form-radio"
            name="deliveryMethod"
            value="standard"
            checked={deliveryMethod === 'standard'}
            onChange={(e) => setDeliveryMethod(e.target.value)}
          />
          <span className="ml-2">Standard Shipping</span>
        </label>
        <label className="inline-flex items-center mr-4">
          <input
            type="radio"
            className="form-radio"
            name="deliveryMethod"
            value="express"
            checked={deliveryMethod === 'express'}
            onChange={(e) => setDeliveryMethod(e.target.value)}
          />
          <span className="ml-2">Express Shipping</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="deliveryMethod"
            value="pickup"
            checked={deliveryMethod === 'pickup'}
            onChange={(e) => setDeliveryMethod(e.target.value)}
          />
          <span className="ml-2">Local Pickup</span>
        </label>
      </div>
    </div>
    <button
      type="submit"
      className='w-[100%] rounded-lg bg-green-600  hover:bg-green-900 py-3 text-white mt-3'
    >
      Submit
    </button>
  </form>
</div>
  )
    }
    export default DeliveryMethod
