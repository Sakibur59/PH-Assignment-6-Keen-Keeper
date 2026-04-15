import React from "react";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { TiHomeOutline } from "react-icons/ti";
import { Link, NavLink } from "react-router";
import logo from '../../assets/logo.png'
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => `flex items-center gap-1 text-[#64748B] mr-1 ${isActive ? "bg-[#244D3F] text-white px-2 py-2 rounded-md  " : ""}`}
        >
          
            <TiHomeOutline />
            Home
          
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) => `flex items-center text-[#64748B]  ${isActive ? "bg-[#244D3F] text-white px-2 py-2 rounded-md" : ""}`}
        >
            <RiTimeLine />
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/stats"}
          className={({ isActive }) => ` flex items-center gap-1  text-[#64748B]  ${isActive ? "bg-[#244D3F] text-white px-2 py-2 rounded-md" : ""}`}
        >
            <ImStatsDots />
          Stats
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className=" bg-base-100 shadow-sm">
        <div className="navbar max-w-300 mx-auto">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="lg:menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="">
          <img src={logo}alt="" />
        </div>
      </div>
     
      <div className="navbar-end hidden lg:flex gap-4 list-none ">
        {links}
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
