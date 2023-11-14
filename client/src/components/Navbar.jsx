import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-800 flex place-content-between">

      <div className='h-16 px-12 flex items-center'>
        <p className='text-white font-bold'>Employee Management System</p>
      </div>

      <div className='h-16 px-12 flex items-center'>
      <Link to={"/logout"} className='text-white font-bold cursor-pointer'>Logout</Link>
      </div>
      
        
    </div>
  );
};

export default Navbar