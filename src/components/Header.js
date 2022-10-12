import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>            
            <div className="navbar bg-base-100 justify-between">
                <NavLink to="/" className="text-2xl my-10 text-center font-semibold text-primary">Knowledge Checker</NavLink>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0">
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-primary font-semibold' : undefined
                        } to="/home">Home</NavLink></li>
                        <li> <NavLink className={({ isActive }) =>
                            isActive ? 'text-primary font-semibold' : undefined
                        } to="/statistics">Statistics</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-primary font-semibold' : undefined
                        } to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-primary font-semibold' : undefined
                        } to="/home">Home</NavLink></li>
                        <li> <NavLink className={({ isActive }) =>
                            isActive ? 'text-primary font-semibold' : undefined
                        } to="/statistics">Statistics</NavLink></li>
                        <li><NavLink className={({ isActive }) =>
                            isActive ? 'text-primary font-semibold' : undefined
                        } to="/blog">Blog</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;