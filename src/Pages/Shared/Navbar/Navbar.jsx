import React from "react";
import Logo from "../../../Component/Logo/Logo";
import { NavLink } from "react-router";
import { IoArrowUpOutline } from "react-icons/io5";

const Navbar = () => {
  const activeClass = "px-4 py-2 rounded-4xl bg-primary text-black mr-2";
  const normalClass = "px-4 py-2 rounded-4xl text-gray-600 hover:text-black mr-2";
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/coverage"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar h-20 bg-base-100 shadow-sm rounded-lg px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{links}</ul>
      </div>
      <div className="navbar-end ">
        <button className="btn rounded-lg mr-2">Sign In</button>
        <button className="btn rounded-lg btn-primary">Sign Up</button>
        <div className="rotate-45 rounded-full h-10 w-10 text-primary flex items-center justify-center text-2xl bg-secondary">
          <IoArrowUpOutline />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
