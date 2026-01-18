import React from "react";
import Logo from "../../../Component/Logo/Logo";
import { Link, Navigate, NavLink } from "react-router";
import { IoArrowUpOutline } from "react-icons/io5";
import UseAuth from "../../../hooks/UseAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, loading, signOutUser } = UseAuth();

  const handleLogout = () => {
    Swal.fire({
      title: "Logging you out...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    signOutUser()
      .then(() => {
        Swal.close();
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have successfully logged out.",
          timer: 1200,
          showConfirmButton: false,
        }).then(() => {
          Navigate("/login"); // redirect to home
        });
      })
      .catch((error) => {
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: error.message,
        });
      });
  };

  // ACTIVE STATE: Uses primary lime green (#CAEB67) for active nav items
  const activeClass =
    "px-4 py-2 rounded-full bg-primary text-primary-content font-semibold shadow-sm transition-all duration-300";

  // NORMAL STATE: Uses secondary-content (white) text, hover shows accent teal with lime green text
  const normalClass =
    "px-4 py-2 rounded-full text-secondary-content hover:bg-accent hover:text-primary transition-all duration-300";

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
      <li>
        <NavLink
          to="/raider"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Be a Raider
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sendParcel"
          className={({ isActive }) => (isActive ? activeClass : normalClass)}
        >
          Send Parcel
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/parcels"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            My Parcels
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    // NAVBAR BACKGROUND: Dark teal (#222A2B) with white text
    <div className="navbar bg-accent text-neutral-content shadow-md z-50 px-8 h-17 rounded-xl">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center gap-4 ">
        {/* Mobile Dropdown */}
        <div className="lg:hidden dropdown">
          {/* HAMBURGER BUTTON: Ghost style with secondary-content (white) icon */}
          <label tabIndex={0} className="btn btn-ghost text-secondary-content">
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
          </label>
          {/* MOBILE DROPDOWN: White background with base-content (dark) text */}
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-xl shadow-lg mt-2 w-60 p-4"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Logo />
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-bold">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-2">
        {loading ? (
          // LOADING SPINNER: Uses primary lime green color
          <span className="loading loading-spinner loading-sm text-primary"></span>
        ) : user ? (
          <div className="dropdown dropdown-end">
            {/* USER AVATAR BUTTON: Border with primary lime green */}
            <button className="rounded-full border-2 border-primary hover:border-primary-light transition-colors">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="rounded-full w-12 h-12"
                />
              ) : (
                // FALLBACK AVATAR: Primary lime green background with dark text
                <div className="rounded-full w-12 h-12 bg-primary text-primary-content flex items-center justify-center font-bold text-lg">
                  {user.displayName ? user.displayName[0].toUpperCase() : "U"}
                </div>
              )}
            </button>
            {/* USER DROPDOWN MENU: White background with dark text */}
            <ul className="dropdown-content menu p-2 shadow-lg bg-base-100 text-base-content rounded-box mt-2 w-48">
              <li>
                <button className="hover:bg-base-200">Profile</button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:bg-error hover:text-error-content"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            {/* SIGN IN BUTTON: Ghost style with secondary-content text, hover shows accent background */}
            <Link
              to={"/login"}
              className="btn rounded-lg btn-ghost text-secondary-content hover:bg-accent hover:text-primary border border-secondary-content/20"
            >
              Sign In
            </Link>
            {/* SIGN UP BUTTON: Primary lime green background with dark text */}
            <Link
              to={"/register"}
              className="btn rounded-lg btn-primary hover:bg-primary-light"
            >
              Sign Up
            </Link>
            {/* ARROW ICON: Primary lime green text on secondary dark background */}
            <div className="rotate-45 rounded-full h-10 w-10 text-primary flex items-center justify-center text-2xl bg-secondary-light hover:bg-accent transition-colors cursor-pointer">
              <IoArrowUpOutline />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
