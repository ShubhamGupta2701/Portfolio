import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import linkedinIcon from '../assets/images/Linkedin.png';
import githubIcon from '../assets/images/github.png';
import logo from '../assets/images/logo.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getLinkClass = (path) => {
        return location.pathname === path ? 'font-semibold text-xl underline' : 'font-semibold text-xl';
    };

    return (
        <nav className="bg-white shadow-md w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img className="h-10 w-10" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="hidden md:flex md:flex-grow md:justify-center space-x-4 gap-6">
                        <Link to="/projects" className={getLinkClass('/projects')}>
                            Projects
                        </Link>
                        <Link to="/about" className={getLinkClass('/about')}>
                            About
                        </Link>
                        <Link to="/experience" className={getLinkClass('/experience')}>
                            Experience
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            className="h-10 w-10 cursor-pointer"
                            onClick={() => window.open("https://www.linkedin.com/in/shubham-gupta-2a5128232/", '_blank')}
                        />
                        <img
                            src={githubIcon}
                            alt="GitHub"
                            className="h-10 w-10 cursor-pointer"
                            onClick={() => window.open("https://github.com/ShubhamGupta2701", '_blank')}
                        />
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/projects" className={getLinkClass('/projects')}>
                            Projects
                        </Link>
                        <Link to="/about" className={getLinkClass('/about')}>
                            About
                        </Link>
                        <Link to="/experience" className={getLinkClass('/experience')}>
                            Experience
                        </Link>
                        <div className="flex justify-center gap-6 mt-2">
                            <img
                                src={linkedinIcon}
                                alt="LinkedIn"
                                className="h-10 w-10 cursor-pointer"
                                onClick={() => window.open("https://www.linkedin.com/in/shubham-gupta-2a5128232/", '_blank')}
                            />
                            <img
                                src={githubIcon}
                                alt="GitHub"
                                className="h-10 w-10 cursor-pointer"
                                onClick={() => window.open("https://github.com/ShubhamGupta2701", '_blank')}
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
