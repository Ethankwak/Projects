"use client";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";


const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Option:', selectedOption);
        console.log('Search Input', searchInput);
    }
  return (
    
      <div className="navbar">
        <div className="search"> {/*container for search bar elements*/}
          <form id="searchBar" method="post" onSubmit={handleSubmit}>
            <select id="queryDropdown" name="queryDropdown" 
                value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">All</option>
              <option value="Songs">Songs</option>
              <option value="Albums">Albums</option>
              <option value="Artists">Artists</option>
            </select>
            <input
              type="text"
              id="SearchInput"
              name="queryInput"
              placeholder="Search"
              value = {searchInput}
              onChange = {(e) =>setSearchInput(e.target.value)}
            />
          
            <button type="submit" name="submitQuery" id="submitButton" className="flex"> 
            <FaCheck />
            </button>
            
          </form>
        </div>

        {/*Drop down content for table sizes and larger*/}
       
        {/* Add more navigation elements here based on your design */}
      </div>
    
  );
}

export default Navbar;