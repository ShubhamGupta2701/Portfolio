import React from 'react';
import linkedinIcon from '../assets/images/Linkedin.png';
import githubIcon from '../assets/images/github.png';

export const Navbar = () => {
    return (
        <div className='font-mono flex items-center justify-between w-screen py-4 px-8 bg-white'>
            <div className="text-3xl font-extrabold">
                Shubham
            </div>
            <div className='flex justify-center gap-8'>
                <div className='font-semibold text-xl cursor-pointer'>
                    Projects
                </div>
                <div className='font-semibold text-xl cursor-pointer'>
                    About
                </div>
                <div className='font-semibold text-xl cursor-pointer'>
                    Contact Me
                </div>
            </div>
            <div className='flex justify-center gap-6'>
                <img 
                    src={linkedinIcon} 
                    alt="LinkedIn" 
                    className="h-10 w-10 cursor-pointer"
                    onClick={() => window.open("https://www.linkedin.com/in/shubham-gupta-2a5128232/", '_blank')} 
                />
                <img 
                    src={githubIcon} 
                    alt="GitHub" 
                    className="h-10 w-10 cursor-pointer mr-6"
                    onClick={() => window.open("https://github.com/ShubhamGupta2701", '_blank')} 
                />
            </div>
        </div>
    );
};
