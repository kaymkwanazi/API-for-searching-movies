import React from 'react'
import { MdTravelExplore } from "react-icons/md";

export const Navbar = () => {
  return (
    <>
    <section className='navBarSec'>
        <header className='header flex'>
           <div className='logoDiv'>
             <a href='#' className='logo flex'>
                <h1><MdTravelExplore className='icon' />Travel</h1>
             </a>
           </div>

           <div className='navBar'>
            <ul className='navList flex'>
                <li className='navItem flex'>
                    <a href='#' className='home'>Home</a>
                    <a href='#' className='about'>About</a>
                    <a href='#' className='destinations'>Destinations</a>
                    <a href='#' className='contact'>Contact</a>
                </li>
                <button className=''>Book Now</button>
            </ul>

           </div>
        </header>
    </section>
    
    </>
  )
}
