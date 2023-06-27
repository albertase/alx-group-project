import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { AiOutlineLinkedin, AiFillGithub, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { FiTwitter } from "react-icons/fi"


const Footer: React.FC = () => {
    return (
        <div className="">
            <div className="fixed bottom-0 bg-black text-white w-full p-5 mx-auto flex items-center justify-around md:items-center md:gap-4 max-[640px]:flex-col max-[640px]:items-start gap-3">
                <div className='flex justify-around w-full max-[640px]:flex max-[640px]:justify-between max-[640px]:w-[80%]'>

               
                <div className="flex items-center">
                    <Link href="/">
                        <div className="flex items-center">
                            <span className="font-bold text-lg">Company Name</span>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-2 w-[50%] items-center text-center">
                    {/* <div className=""> */}
                    <ul className='flex justify-between items-center w-full text-center'>
                        <li>
                            <Link href="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/myworks">
                                <span>Works</span>
                            </Link>
                        </li>
                    </ul>
                    {/* </div> */}
                    {/* <div className=""> */}
                    <ul className='flex justify-between items-center w-full'>
                        <li>
                            <Link href="/contact">
                                <span>Contact</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <span>Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/hobby">
                                <span>Hobby</span>
                            </Link>
                        </li>
                    </ul>
                    {/* </div> */}
                </div>
                </div>
                <div className="flex flex-col gap-3 p-2 w-fit max-[640px]:p-0 max-[640px]:flex-row max-[640px]:gap-5">
                    <div className="flex gap-5">
                        <Link href="#"><AiFillGithub /></Link>
                        <Link href="#"><AiOutlineLinkedin /></Link>
                        <Link href="#"><FiTwitter /></Link>
                    </div>
                    <div className="flex gap-5">
                        <Link href="#"><AiOutlineInstagram /></Link>
                        <Link href="#"><AiOutlineYoutube /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
