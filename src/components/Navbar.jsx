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
        const baseClasses = 'font-semibold text-lg px-4 py-2 rounded-lg transition-all duration-300';
        const isActive = location.pathname === path;
        
        return isActive 
            ? `${baseClasses} bg-purple-600 text-white shadow-lg shadow-purple-500/25` 
            : `${baseClasses} text-gray-300 hover:text-white hover:bg-purple-500/20 hover:shadow-md hover:shadow-purple-500/10`;
    };

    function toResume(){
        window.open("https://drive.google.com/file/d/1tUKB122Z8xezQk8NrNQCVdaTp4L81a7N/view?usp=sharing", '_blank');
    }

    return (
        <nav className="backdrop-blur-lg bg-gray-900/80 border-b border-purple-500/20 w-full font-mono sticky top-0 z-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-purple-400 p-1 shadow-lg shadow-purple-500/25">
                                <div className="h-10 w-10 rounded-lg bg-gray-900 flex items-center justify-center">
                                    <img className="h-6 w-6 filter brightness-0 invert" src={logo} alt="logo" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex md:flex-grow md:justify-center gap-4">
                        <Link to="/" className={getLinkClass('/')}>
                            Home
                        </Link>
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
                    
                    {/* Desktop Resume Button */}
                    <div className="hidden md:flex items-center">
                        <button
                            onClick={toResume}
                            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5"
                        >
                            <img
                                src={resumeImg}
                                alt="resume"
                                className="h-5 w-5 filter brightness-0 invert"
                            />
                            Resume
                        </button>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/20 focus:outline-none focus:bg-purple-500/20 transition-colors duration-300"
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
                <div className="md:hidden backdrop-blur-lg bg-gray-900/95 border-t border-purple-500/20">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <div className="flex flex-col gap-3">
                            <Link 
                                to="/projects" 
                                className={getLinkClass('/projects') + ' text-center py-3'}
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </Link>
                            <Link 
                                to="/about" 
                                className={getLinkClass('/about') + ' text-center py-3'}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link 
                                to="/experience" 
                                className={getLinkClass('/experience') + ' text-center py-3'}
                                onClick={() => setIsOpen(false)}
                            >
                                Experience
                            </Link>
                            <button
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold text-lg py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 mt-2"
                                onClick={() => {
                                    toResume();
                                    setIsOpen(false);
                                }}
                            >
                                <img
                                    src={resumeImg}
                                    alt="resume"
                                    className="h-5 w-5 filter brightness-0 invert"
                                />
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};