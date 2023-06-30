import React from 'react'
import Button from '../Button/Button'
import Link from "next/link";
import 'animate.css';


const MyWork: React.FC = () => {
    return (
        <div className="bg-[#1D1C1C] relative p-[98px] flex flex-col gap-10 md:flex-row md:gap-4 md:flex-wrap md:justify-around w-full">
            <h1 className="text-white Zilla_Slab text-[20px] md:text-[48px] absolute left-32 top-6 leading-[50.4px]">My Works</h1>
            <div className="p-[60px] pl-8 zoom  md:p-[60px] md:py-24 md:px-52 bg-[#E0D5DD] rounded text-center">
                <p className="text-center md:text-[28px] animate-zoom">Projects</p>
                <br />
                <br />
                <br />
                <div className="w-full h-full animate-zoom">
                    <Link href="/projects">
                        <div className="animate__animated animate__zoomIn">
                <Button>
                    Explore
                </Button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="p-[60px] pl-8 zoom md:p-[60px] md:py-24 md:px-52 bg-[#E0D5DD] rounded text-center">
                <p className="text-center md:text-[28px] animate-zoom">Products</p>
                <br />
                <br />
                <br />
                <div className="w-full h-full animate-zoom">
                    <Link href="/products">
                        <div className="animate__animated animate__zoomIn">
                <Button>
                    Explore
                </Button>
                        </div>


                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MyWork