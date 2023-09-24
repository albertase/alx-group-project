import React from 'react';
import Link from 'next/link';
//


const Footer: React.FC = () => {
    return (
        <div className="">
            <div className="bottom-0 bg-[#0D0C0C] text-white w-full py-16 pr-20 mx-auto flex items-center justify-around md:items-center md:gap-4 max-[640px]:flex-col max-[640px]:items-start gap-3">
                <div className='flex justify-around w-full max-[640px]:flex max-[640px]:justify-between max-[640px]:w-[80%]'>
                <div className="">
                    <Link href="/">
                        <div className="w-40">
                            <img src="/logo_pn.png" alt="Footer Logo"/>
                        </div>
                    </Link>
                </div>
                <div className="flex flex-col gap-8 w-[50%] items-center text-center">
                    <ul className='flex justify-between items-center w-full text-center'>
                        <li>
                            <Link href="/">
                                <span className="Montserrat text-[20px] p-2 md:p-0 leading-[24.38px]">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span className="Montserrat text-[20px] p-2 md:p-0 leading-[24.38px]">About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <span className="Montserrat text-[20px] p-2 md:p-0 leading-[24.38px]">Works</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className='flex justify-between w-full'>
                        <li>
                            <Link href="/contact">
                                <span className="Montserrat text-[20px] p-2 md:p-0 leading-[24.38px]">Contact</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/" as="/">
                                <span className="Montserrat text-[20px] p-2 md:p-0 leading-[24.38px]">Blog</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
                <div className="flex flex-col gap-3 p-2 w-fit max-[640px]:p-0 max-[640px]:flex-row max-[640px]:gap-5">
                    <div className="flex gap-5">
                        <Link href="https://github.com/albertase" as="https://github.com/albertase"><img src="/GitHub.svg" alt="Github"/></Link>
                        <Link href="https://www.linkedin.com/in/ukaegbu-albert-86b221208/" as="https://www.linkedin.com/in/ukaegbu-albert-86b221208/"><img src="/LinkedIn.svg" alt="Linked In"/></Link>
                        <Link href="https://twitter.com/UkaegbuAlbert" as="https://twitter.com/UkaegbuAlbert"><img src="/Twitter.svg" alt="Twitter"/></Link>
                    </div>
                    <div className="flex gap-5">
                        <Link href="/" as="/"><img src="/Instagram.svg" alt="Instagram"/></Link>
                        <Link href="https://youtube.com/@albertukaegbu2395" as="https://youtube.com/@albertukaegbu2395"><img src="/YouTube.svg" alt="Youtube"/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
