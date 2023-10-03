import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='flex justify-between items-center px-16 bg-zinc-800 text-slate-300 py-8 w-full'>
        <div>
            <h1 className='text-3xl font-bold'>COVENER</h1>
            </div>
        <div className='flex flex-row gap-8'>
           <Link className='' to='/'>Home</Link>
           <Link to='/'>Gallery</Link>
           <Link to='/'>AboutUs</Link>
           <Link to='/'>ContactUs</Link>
           <Link to='/'>Services</Link>
        </div>
    </div>
  )
}

export default NavBar;