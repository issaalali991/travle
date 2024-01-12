import { createGlobalOptions } from "contentful";
import React from "react";
import { useState, useEffect} from "react";


const NavBar =()=> {
    const [searchText, setSearchText] = useState('');
    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
        event.preventDefault();  
        console.log(event);
    };
const handleSearchSubmit = (event) => {
    event.preventDefault();
};

return (
    <nav className="h-20 rounded-t-lg flex justify-between items-center flex-grow bg-black">
            <div className="flex items-center space-x-4 flex-grow">
      <img src="logo.jpg" alt="SharedTravelLogo" className="h-8 w-8 mr-2" />
        <ul className="flex items-center space-x-4 flex-grow">
          <li className="basis-1/4 hover:text-yellow-300 text-white font-bold py-2 px-4">HOME</li>
          {/* new lecture for Link router pages */}
          <li className="basis-1/4  hover:text-yellow-300 text-white font-bold py-2 px-4">ABOUT US</li>
           {/* new lecture for Link router pages */}
          <li className="basis-1/4  hover:text-yellow-300 text-white font-bold py-2 px-4">MY TRIPS</li>
           {/* new lecture for Link router pages */}
           <li className="basis-1/4  hover:text-yellow-300 text-white font-bold py-2 px-4">HELP</li>
        </ul>
      </div>
     <div>

        <form className="flex justify-end relative">
 <input className="border-double border-2 border-sky-500 rounded py-1 px-8"
          type="text"
          placeholder="Search..."
          // value={searchText}
          onKeyDown={(event) => {
            if (event.key == "Enter") {
              handleSearchChange(event);
            }
          }}
        />
          <button className="bg-black text-white py-1 px-1 rounded-full hover:bg-gray-800 transition duration-300 font-semibold text-lg" onClick={(event)=> handleSearchChange(event)} type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};
export default NavBar; 
