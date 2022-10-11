import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link to="/home" className="normal-case text-xl">Knowledge Checker</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/home">Home</Link></li>
                        <li tabindex="0">
                            <Link to="/statistics">
                                Statistics
                            </Link>
                        </li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>
            </div>
            <div className="hero h-auto bg-base-200 py-20">
                <div className="hero-content text-center">
                    <p className="text-3xl font-bold py-6">Knowledge Checker is a QUIZ site where you can check your knowledge with some limited quiz of selected topics. If you want to check your knowledge depth then select a topics from bottom and check yourself with quizes.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;