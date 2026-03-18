import React from 'react';
import logo from '../../assets/logo.png'
import NavLinks from './NavLinks';
import { Menu, ShoppingCart } from 'lucide-react';

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Orders",
    path: "/orders"
  },
  {
    id: 3,
    name: "Plans",
    path: "/plans"
  },
  {
    id: 4,
    name: "About",
    path: "/about"
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact"
  }
];
const Navbar = () => {
    return (
        <>

            {/* Daisy  */}
            <nav className='bg-white fixed w-full top-0 z-50'>
              <div className="navbar w-11/12 mx-auto shadow-sm">
                <div className="navbar-start">
                  <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                      <Menu  className='text-black'/>
                    </div>
                    <ul
                      tabIndex="-1"
                      className="menu menu-sm text-white dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
                      {
                          navLinks.map(items => <NavLinks key={items.id} items={items}></NavLinks>)
                        }
                    </ul>
                  </div>
                  {/* Left Side */}
                  <div className='flex gap-3 items-center cursor-pointer transition-all duration-300'>
                      <div className='w-10 rounded-full shadow-lg shadow-orange-600/50 '>
                        <img 
                        src={logo} 
                        alt="mealHub Logo" 
                        className='rounded-full shadow drop-shadow-orange-500 hover:scale-125 transition-all duration-300'
                      />
                      </div>
                      <h1 className='hover:text-orange-500 text-black transition-all font-bold text-2xl'>mealHub</h1>
                  </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1 flex gap-5">
                    {
                          navLinks.map(items => <NavLinks key={items.id} items={items}></NavLinks>)
                      }
                  </ul>
                </div>
                <div className="navbar-end flex gap-4">
                  <ShoppingCart className='text-black'/>
                  <a className="btn bg-orange-500 shadow-md shadow-orange-500/50 border-none hover:scale-105 transition-all duration-300">
                    Sign Up
                  </a>
                </div>
              </div>
            </nav>
        </>
    );
};

export default Navbar;