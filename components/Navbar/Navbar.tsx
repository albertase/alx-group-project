import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import LogoIcon from "@/public/logo.svg"


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);

    const handleDropDown = () => {
        setDrop(prevDrop => !prevDrop);
    }
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-[#1D1C1C] py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <LogoIcon />
                    </span>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden'>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#1D1C1C] text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7'> <a href="/" className='text-white hover:text-gray-400 duration-500'>Home</a> </li>
                    <li className='md:ml-8 text-xl md:my-0 my-7'> <a href="/" className='text-white hover:text-gray-400 duration-500'>About</a> </li>
                    <div className="flex relative justify-center items-center" onClick={handleDropDown}>
                        <li className='md:ml-8 text-xl md:my-0 my-7 px-4'> <p className='text-white hover:text-gray-400 duration-500 cursor-pointer'>My Works</p> </li>
                        <span>
                            {drop &&
                                <FontAwesomeIcon icon={faCaretDown}  />
                            }
                        </span>
                        {drop &&
                            <div className="absolute top-full w-max bg-white shadow-md rounded">
                                <ul className="text-left border rounded">
                                    <li className="px-4 py-1 text-black border hover:bg-gray-100"><a href="/">Projects</a> </li>
                                    <li className="px-4 py-1 text-black  border hover:bg-gray-100"><a href="/">Products</a> </li>
                                </ul>
                            </div>
                        }

                    </div>
                    <li className='md:ml-8 text-xl md:my-0 my-7'> <a href="/" className='text-white hover:text-gray-400 duration-500'>Contact</a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar