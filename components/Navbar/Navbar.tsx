'use client'
import React, {useEffect, useRef, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import LogoIcon from "@/public/logo.svg"
import {usePathname} from 'next/navigation'
import Link from 'next/link';




const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [drop, setDrop] = useState(false);
    const usePath: string = usePathname()



    // Active Classes
    const homeRef:React.JSX.Element = <Link href="/" className={usePath === '/' ? 'non-active' : 'active'}>Home</Link>
    const aboutRef: React.JSX.Element = <Link href="/about" className={usePath === '/about' ? 'non-active' : 'active'}>About</Link>
    const projectRef: React.JSX.Element = <Link href="/projects" className={usePath === '/projects' ? 'non-active' : 'active'}>My Works</Link>
    const productRef: React.JSX.Element = <Link href="/products" className={usePath === '/products' ? 'non-active' : 'active'}>My Works</Link>
    const contactRef: React.JSX.Element = <Link href="/contact" className={usePath === '/contact' ? 'non-active' : 'active'}>Contact</Link>

    const handleDropDown = (): void => {
        setDrop(prevDrop => !prevDrop);
    }
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <div className='md:flex items-center justify-between bg-[#1D1C1C] py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <Link href="/">
                        <LogoIcon />
                        </Link>

                    </span>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <ul className={`logo md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#1D1C1C] text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <li className='md:ml-8 text-xl md:mb-0 mb-3 md:my-0 my-7'> <Link href="/" className='text-white hover:text-gray-400 duration-500'>{homeRef}</Link> </li>
                    <li className='md:ml-8 text-xl md:my-7 my-0'> <Link href="/about" className='text-white hover:text-gray-400 duration-500'>{aboutRef}</Link> </li>
                    <div className="flex absolute left-4  bottom-6 md:bottom-0  md:relative justify-center  md:mr-0 items-center" onClick={handleDropDown}>
                        <li className='md:ml-8 text-xl md:my-0 my-7 px-4'>
                            <p className='text-white hover:text-gray-400 duration-500 cursor-pointer'>{usePath === "projects" ? projectRef : productRef}</p>
                        </li>
                        <span>
                            {drop &&
                                <FontAwesomeIcon icon={faCaretDown}  />
                            }
                        </span>
                        {drop &&
                            <div className="absolute top-full w-max bg-white shadow-md rounded">
                                <ul className="text-left border rounded">
                                    <li className="px-4 py-1 md:text-2xl text-black border hover:bg-gray-100"><Link href="/projects">Projects</Link> </li>
                                    <li className="px-4 py-1 md:text-2xl text-black  border hover:bg-gray-100"><Link href="/products">Products</Link> </li>
                                </ul>
                            </div>
                        }

                    </div>
                    <li className='md:ml-8 text-xl md:mt-0 mt-2 md:my-0 my-12'> <Link href="/contact" className='text-white hover:text-gray-400 duration-500'>{contactRef}</Link> </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar