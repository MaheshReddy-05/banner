import React from 'react';

export default function Scp() {
  return (
    <div>
      <div className='text-center text-white'>
        <div className='pt-10'>
          {TextBetweenLines()}
        </div>
        <br />
        <div className='text-[2rem] font-[Poppins] mx-auto'>
          Making learning easier and <br />
          <span>more convenient for you.</span>
        </div>
      </div>
    </div>
  );
}

function TextBetweenLines() {
  return (
    <div className='text-between-lines flex items-center'>
      <div className='line flex-grow border-b border-gray-400 w-1/4'></div>
      <div className='text-[1.5rem] mx-4 text-white font-[Rubik] px-20'>{"Why Coding-Decoded ?"}</div>
      <div className='line flex-grow border-b border-gray-400 w-1/4'></div>
    </div>
  );
}
