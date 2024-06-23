import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import resumeImg from '../assets/images/resume.png';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getLinkClass = (path) => {
        return location.pathname === path ? 'font-semibold text-xl underline px-2' : 'font-semibold text-xl px-2';
    };

    function toResume(){
        window.open("https://drive.google.com/file/d/1HlNYA_o8bRqKB4pBHuTJ-9hyYyKbx6-E/view?usp=sharing", '_blank');
    }

    return (
        <nav className="bg-white shadow-md w-full font-mono">
            <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img className="h-10 w-10" src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="hidden md:flex md:flex-grow md:justify-center gap-10">
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
                    <div className="hidden md:flex items-center gap-6">
                        <img
                            src={resumeImg}
                            alt="resume"
                            className="h-12 w-12 cursor-pointer"
                            onClick={() => window.open("https://drive.google.com/file/d/1HlNYA_o8bRqKB4pBHuTJ-9hyYyKbx6-E/view?usp=sharing", '_blank')}
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
                        <div className="flex flex-col gap-6">
                            <Link to="/projects" className={getLinkClass('/projects')}>
                                Projects
                            </Link>
                            <Link to="/about" className={getLinkClass('/about')}>
                                About
                            </Link>
                            <Link to="/experience" className={getLinkClass('/experience')}>
                                Experience
                            </Link>
                            <button
                                className="text-lg md:text-xl border-4 border-black rounded-2xl p-2 bg-black text-white text-center"
                                onClick={toResume}
                            >Resume
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

