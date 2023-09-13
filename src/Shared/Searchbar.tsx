import React, { useState } from 'react';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

type Props = {
  placeholder: string;
  query: string;
  onSearch: (searchQuery: string) => void;
};

const Searchbar = ({ placeholder, query, onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState(query);

  const handleSearch = () => {
    onSearch(searchTerm); // Call the onSearch function with the local searchTerm state
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update the local state with the input value
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Trigger search when the user presses Enter
      handleSearch();
    }
  };

  return (

<div className="">
  <div className="bg-white shadow-md w-[100%] h-[3.875rem] flex flex-row items-center justify-between p-1.5 rounded-xl">
    {/* Input bar */}
    <div className='pl-[1.5rem]'>
      <input
        className="w-[18.2rem] h-[1.7rem] text-gray-700 focus:outline-none focus:shadow-outline border-none outline-none opacity-[0.7rem]"
        id="search"
        type="text"
        placeholder={placeholder}
        value={searchTerm} // Use the local searchTerm state
        onChange={handleInputChange} // Handle input changes
        onKeyDown={handleKeyDown} // Handle Enter key press
      />
    </div>

    {/* Button */}
    <div className="flex items-center justify-center gap-3">
      
      <button className='text-primary-600' ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        className="bg-primary-600 hover:bg-primary-800 text-white font-bold py-3 px-3 rounded-[0.75rem] focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleSearch}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</div>
  );
};

export default Searchbar;
