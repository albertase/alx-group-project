import Image from "next/image";
import React, {useRef, useState } from 'react';
import { data } from '../mockData';
import Button from "@/components/Button/Button";

const Slide: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [isReadMore, setIsReadMore] = useState(true);

    const slideLeft = (): void => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 400;
        }
    };

    const slideRight = (): void => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 500;
        }
    };

    const toggleReadMore = () => {setIsReadMore(!isReadMore)};



    return (
        <div className="bg-gray-100 -mt-32">
            <h1 className="Zilla_Slab text-[48px] leading-[50.4px] pt-40 text-[#1D1C1C] pl-12">Articles</h1>
            <div className='relative flex flex-nowrap items-center bg-gray-100 pl-6
            whitespace-nowrap scroll-smooth overflow-x-scroll overflow-y-hidden sco scrollbar-hidden md:overflow-x-hidden w-full h-full' ref={sliderRef}>
                {data.map((item: any, index:number) => (
                <div key={index} className="w-[400px] md:w-full h-[480px] md:h-[475px] p-8">
                    <Image
                        className='rounded-[25px] inline-block p-2 cursor-pointer hover:scale-105 object-cove ease-in-out duration-300'
                        width={400}
                        height={100}
                        src={item.img}
                        alt='Articles'
                        priority
                    />
                    <p className="Montserrat_h1 text-[20px] leading-[30px] py-3">{item.header}</p>
                    <p className="whitespace-break-spaces">{item.slideText.slice(0, 100)}</p>
                    {item.slideText.length > 100 &&
                        <span className="py-8 self-start mt-auto"><br/>
                       {item.button}
                        </span>
                    }
                </div>
                ))}
            </div>
            <div className="flex justify-between">
                <img src="/left_arrow.png" alt="Lest" className="p-12 cursor-pointer" onClick={slideLeft}/>
                <img src="/right_arrow.png" alt="Right" className="p-12 cursor-pointer" onClick={slideRight}/>
            </div>
        </div>
    );
};

export default Slide;