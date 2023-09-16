import React, { useState } from 'react';
import { SelectedPage } from '@/Shared/types';
import ActionButton from '@/Shared/ActionButton';
import useMediaQuery from '@/hooks/useMediaQueries';
import HeroImage from '@/assets/heropic.png';
import DashedCircle from '@/assets/Group.png';
import buttnPic from '@/assets/buttonPic.png';
import Group from '@/assets/Group.png';
import Searchbar from '@/Shared/Searchbar';
import Gallery from '../Gallery/Gallery';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  query: string;
  onSearch: (query: string) => void;
};

const Home = ({ setSelectedPage, query}: Props) => {
  const [searchResults, setSearchResults] = useState([]);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  // Define the handleSearch function to handle search queries
  const handleSearch = (query:string) => {
    // Replace this with your actual search logic
    // For example, you can make an API request to fetch search results
    // and then update the searchResults state with the results.
    // setSearchResults(newSearchResults);
    // Finally, call the onSearch function to pass the query to the parent component.
    const newResults = query;
    setSearchResults(newResults)
  };

  const flexBetween = "flex items-center justify-between";

  return (
    <>
    <section id='home' className= {`${flexBetween} gap-16 bg-gray-100 py-10 md:h-full md:pb-0 relative`}>
      {/* IMAGE AND MAIN HEADER */}
      <div className='mx-auto flex w-5/6 flex-row justify-center align-middle gap-1'>
        {/* MAIN HEADER */}
        <div className='mt-6 flex-1 w-[100%]'>
          {/* MAIN TOP HEADER */}
          <div className='mx-auto w-full flex flex-col'>
            <span className='my-1 p-1'>
              <h1 className='text-gray-600 text-[2.7rem] md:text-[42px] m-0 relative'>
                When your <span className='text-top absolute ml-5 text-primary-600'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8">
  <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
</svg>
</span>
                <br />
                <span className='font-bold'>Dream Wedding come true </span>
              </h1>
            </span>

            <span>
              <p className='text-gray-600 font-[1.25rem] w-[23.5rem] pb-1'>
                “ Once in a while, right in the middle of an ordinary life, love gives us a fairy tale. ”
              </p>
            </span>
            {/* Searchbar */}
            <span className='mt-[2rem]'>
              {/* Pass the handleSearch function as a prop */}
              <Searchbar query={query} onSearch={handleSearch} placeholder='Cari Photographer, Katering, dsb'/>
            </span>
          </div>

          {/* MAIN BOTTOM HEADER */}
          <div className='grid grid-cols-2 gap-[3.31rem] justify-start align-middle mt-[4rem]'>
            {/* You can add content here for the bottom header */}
            <div className='flex gap-3 align-middle justify-start'>
                <span className='bg-gray-none text-primary-600 p-2 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
                    <path fillRule="evenodd" d="M3.5 2A1.5 1.5 0 002 3.5V15a3 3 0 106 0V3.5A1.5 1.5 0 006.5 2h-3zm11.753 6.99L9.5 14.743V6.257l1.51-1.51a1.5 1.5 0 012.122 0l2.121 2.121a1.5 1.5 0 010 2.122zM8.364 18H16.5a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-2.136l-6 6zM5 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    </span>
                    <span className='text-start h-full w-[8.875rem]'><p className='font-[600] mt-2.5'>Websites Readdy for you</p></span>
            </div>

            <div className='flex gap-3 align-middle justify-start'>
                <span className='bg-gray-none text-primary-600 p-2 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
  <path d="M1 12.5A4.5 4.5 0 005.5 17H15a4 4 0 001.866-7.539 3.504 3.504 0 00-4.504-4.272A4.5 4.5 0 004.06 8.235 4.502 4.502 0 001 12.5z" />
</svg>
                    </span>
                    <span className='text-start h-full w-[8.875rem]'><p className='font-[600] mt-2.5'>Beat the weather</p></span>
            </div>

            <div className='flex gap-3 align-middle justify-start'>
                <span className='bg-gray-none text-primary-600 p-2 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
  <path fillRule="evenodd" d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37zM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 013 13.179z" clipRule="evenodd" />
</svg>

                    </span>
                    <span className='text-start h-full w-[8.875rem]'><p className='font-[600] mt-2.5'>Catering at it's best</p></span>
            </div>

            <div className='flex gap-3 align-middle justify-start'>
                <span className='bg-gray-none text-primary-600 p-2 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10">
  <path d="M14.916 2.404a.75.75 0 01-.32 1.012l-.596.31V17a1 1 0 01-1 1h-2.26a.75.75 0 01-.75-.75v-3.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H2V9.957a.75.75 0 01-.596-1.372L2 8.275V5.75a.75.75 0 011.5 0v1.745l10.404-5.41a.75.75 0 011.012.32zM15.861 8.57a.75.75 0 01.736-.025l1.999 1.04A.75.75 0 0118 10.957V16.5h.25a.75.75 0 110 1.5h-2a.75.75 0 01-.75-.75V9.21a.75.75 0 01.361-.64z" />
</svg>

                    </span>
                <span className='text-start h-full w-[8.875rem]'><p className='font-[600] mt-2.5'>Find event centres</p></span>
            </div>
          </div>
        </div>
      {/*IMAGE*/}
      <div className='object-cover mx-auto w-full flex-1'>
        <img src={HeroImage} alt='hero-image' className='ml-5 w-full h-full transform rotate-[-0.894deg]'/>
      </div>
      </div>

      {/** Image at the far right */}
      <img src={DashedCircle} alt='dashed circle' className='absolute right-0 top-[-3.5rem]'/>

      {/** Button image at the buttom */}
      <img src={buttnPic} alt='dashed circle' className='absolute right-[11.7rem] bottom-[6.1rem]'/>

      
      {/** Basket buttom */}
      <div className='absolute bottom-[2%] right-[15rem]'>
        <button className='text-secondary-blue bg-gray-none text-300 py-3 px-4 rounded-full flex'>
          <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
          </span>

          <span>
            <p>Your basket(4)</p>
          </span>
        </button>
      </div>
    </section>
    <Gallery/>
    </>
  );
};

export default Home;
