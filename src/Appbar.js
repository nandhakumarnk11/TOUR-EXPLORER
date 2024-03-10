import React from 'react'
import './App.css';
import { Link } from 'react-router-dom'


const Appbar = () => {
  return (
   <section id='navbar'>
     <header>
        <div className="logo">
          <h1 className='h1'>TAMILNADU TOURISM</h1>
        </div>
        <div className="display-menu">
            <Link className='menu' to={"/Home"}>Home</Link>
            <Link className='menu' to={"/Placetovisit"}>Places to visit</Link>
            <Link className='menu' to={"/Timetovisit"}>Time to visit</Link>
            <Link className='menu' to={"/Packages"}>Packages</Link>
            <Link className='menu' to={"/Food"}>Food</Link>

        </div>
    </header>
   </section>
  )
}

export default Appbar;