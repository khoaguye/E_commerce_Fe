
import React, { useState, useEffect, useContext } from "react";
import CategoryDropdown from "./CategoryDropdown"
import {ProductContext} from './ProductContext'
function Filter_bar() {
  const [price, setPrice] = useState(2000);
  const [checkboxes, setCheckboxes] = useState([
    { id: "checkbox3", label: "Price Low - High", isChecked: false },
    { id: "checkbox4", label: "Price High - Low", isChecked: false },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const {content, setContent} = useContext(ProductContext); 
  const {subContent, setsubContent} = useContext(ProductContext)
  const [brand, setBrand] = useState("");
  function handlePriceChange(event) {
    setPrice(event.target.value);
  }
  useEffect(() => {
    setCheckboxes([
      { id: "checkbox3", label: "Price Low - High", isChecked: false },
      { id: "checkbox4", label: "Price High - Low", isChecked: false },
    ]);
  }, [content]);

  function handleCheckboxChange(event) {
    const clickedCheckboxId = event.target.id;
    const sortedProduct = [...subContent]; // create a copy of subContent
    if (clickedCheckboxId === "checkbox3") {
      // sort by price low to high
      sortedProduct.sort((a, b) => a.price - b.price);
    } else if (clickedCheckboxId === "checkbox4") {
      // sort by price high to low
      sortedProduct.sort((a, b) => b.price - a.price);
    }
    setCheckboxes((prevCheckboxes) =>
    prevCheckboxes.map((checkbox) =>
      checkbox.id === clickedCheckboxId
        ? { ...checkbox, isChecked: event.target.checked }
        : { ...checkbox, isChecked: false } // uncheck other checkbox
    )
  );
    setsubContent(sortedProduct);
  }
  

  function handlePriceRange() {  
    // Apply the filter to 'content'
    const filteredProduct = content.filter((obj) => {
      console.log(obj.price)
      return Number(obj.price) <= price;
    });
    console.log(price)
    console.log(filteredProduct)
    // Set the filtered value back to 'content'
    setsubContent(filteredProduct);
    console.log( content)
    console.log( subContent)
   
  }

  function handleBrandFilter(event){
    const clickedBrand = event.target.textContent;
    const filteredProduct = content.filter((obj) => {
      return obj.brand === clickedBrand;
    });
    setsubContent(filteredProduct);
  }
  

  return (
    <div className=" md:mt-2 flex flex-col md:gap-7 gap-4 border md:border-none overflow-y-auto">
      <div className="mt-4 px-4">
        <h2 className="text-[1.5rem] font-bold text-green-900">Categories</h2>
          <CategoryDropdown />
      </div> 
      <div className=" mt-4 px-4">
      <hr />
      </div>
      <div className="mt-2 px-4">
        <h2 className="text-[1.5rem] font-bold text-green-900">Prices</h2>
        <div className="w-full">
          <input
            type="range"
            id="price"
            name="price"
            min="0"
            max="2000"
            value={price}
            onChange={handlePriceChange}
            className="w-[100%] accent-green-900"
          />
          <label
            htmlFor="price"
            className="block  text-gray-700 font-bold mb-2"
          >
            Price: $0 - ${price}
          </label>
          <button 
            className="bg-light-grey hover:bg-green-900 hover:text-white px-4 py-2 rounded-full mt-1 font-bold"
            onClick = {handlePriceRange}  
          >
            APPLY
          </button>
        </div>
      </div>

      <div className="px-4">

        <div className=" grid grid-cols-2 gap-4 ">
          {checkboxes.map(({ id, label, isChecked }) => (
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 accent-green-900"
                  checked={isChecked}
                  id={id}
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-700">{label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 px-4">
      <h2 className="text-[1.5rem] font-bold text-green-900">Brands</h2>
      {subContent.map ((brand) => (
        <p className= "text-gray-700 ml-1 bg-white hover:bg-light-grey" onClick ={handleBrandFilter}>{brand.brand}</p>
      ))}
      </div>

      <button 
        className=" w-[100%] mt-4 bg-green-900 text-white  px-5 py-3 text-[1.25rem] tracking-wider"
      
      > {subContent.length} items</button>

    </div>
  );
}

export default Filter_bar;

 