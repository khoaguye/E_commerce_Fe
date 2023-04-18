import { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import {IoIosArrowDropdownCircle} from "react-icons/io"
import Product_Contain from './Product_Contain'
import {ProductContext} from './ProductContext';
const categories = [
  "All Categories",
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
];

function CategoryDropdown() {
  //const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 // const {filterContent, setFilterContent} = useContext(ProductContext)
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);
  const { selectedCategory, setSelectedCategory } = useContext(ProductContext);

  function handleCategoryClick(category) {
   
    setSelectedCategory(category);
    setIsDropdownOpen(false);
   
  }

  return (
    <div className="relative inline-block text-left mt-2">
      <div>
        <button
          type="button"
          className="inline-flex gap-2 justify-between w-full rounded-md border border-gray-300 outline-none shadow-sm px-10 py-2 bg-white text-md font-medium text-gray-700 hover:bg-gray-50 "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="capitalize">{selectedCategory}</span>
          <IoIosArrowDropdownCircle size ={"20px"} className= "mt-1 text-green-900"/>
        </button>
      </div>

      {isDropdownOpen && (
        <div className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {categories.map((category) => (
              <button
                key={category}
                className={`${
                  category === selectedCategory ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryDropdown;
