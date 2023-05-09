import * as React from 'react';
import './Buttons.css'
export default function ContainedButtons() {
  return (
    <div className='mt-5 buttons'>
      <button className='bg-rose-500 rounded-md py-1 px-3 '>View Courses</button>
      <button className='bg-gray-400 rounded-md ml-2 py-1 px-3'>Watch Video</button>
    </div>
  );
}
