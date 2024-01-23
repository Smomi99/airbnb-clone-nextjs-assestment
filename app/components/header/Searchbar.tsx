'use client';
import React, { useState } from 'react';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {  SearchIcon, UserIcon, } from "@heroicons/react/solid" 
const Searchbar = () => {
  const [input,setInput] = useState("");
  const [endDate,setEndDate] = useState(new Date());
  const [startDate,setStartDate] = useState(new Date());
  const [numberOfGuests,setNumberOfGuest] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  }
  return (
    <>
    <div className="flex items-center md:border-2 
        rounded-full py-2 md:shadow-sm">
          <input 
        
          className="flex-grow pl-5 bg-transparent 
          outline-none text-sm text-gray-600 
          placeholder-gray-400"
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          type="text" placeholder={ "Start your search"} />
          <SearchIcon 
          className="hidden md:inline-flex h-8 bg-red-400 
          text-white rounded-full p-2 cursor-pointer
          md:mx-2" />
        </div>


     {input && <div className=' absolute top-[100%] left-[50%] translate-x-[-50%]'>
      
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        rangeColors={['#FD5B61']}
        minDate={new Date()}
      />
      <div className='flex items-center border-b mb-4'>
          <h2 className='text-2xl flex-grow font-semibold'>
            Number Of Guest 
          </h2>
          <UserIcon className='h-5'/>
          <input 
            type="number"
            className='w-12 pl-2 text-lg outline-none text-red-400'
            value={numberOfGuests}
            min={1}
            onChange={(e)=> setNumberOfGuest(Number(e.target.value))}
              />
      </div>
      </div>}
    </>
  )
}

export default Searchbar