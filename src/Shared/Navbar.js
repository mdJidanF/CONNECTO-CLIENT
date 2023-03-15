import React from 'react';
import { FaUserCircle } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { IoNotifications } from "react-icons/io5"
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#2C2F4A] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link>Item 1</Link></li>
              <li tabIndex={0}>
                <Link className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </Link>
                <ul className="p-2">
                  <li><Link>Submenu 1</Link></li>
                  <li><Link>Submenu 2</Link></li>
                </ul>
              </li>
              <li><Link>Item 3</Link></li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">Abir Hasan</Link>
        </div>
        <div className="navbar-end hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='font-semibold'><Link>Register</Link></li>

            <li className='font-semibold'><Link>Login</Link></li>
            <li className='font-semibold'><Link>Logout</Link></li>
          </ul>
          <button className='btn btn-primary btn-ghost btn-circle'><HiOutlineMail className='text-2xl' /></button>
          <button className='btn btn-primary btn-ghost btn-circle'><IoNotifications className='text-2xl' /></button>
          <button className='btn btn-primary btn-ghost btn-circle'><FaUserCircle className='text-2xl' /></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;