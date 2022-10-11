import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <NavLink to="/home" className="text-3xl my-10 text-center font-semibold text-primary">Knowledge Checker</NavLink>
                </div>
                <div className="flex-none">
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