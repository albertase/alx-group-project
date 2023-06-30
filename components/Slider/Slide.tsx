import Image from "next/image";
import React, {useRef } from 'react';
import { data } from '../mockData';

const Slide: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

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


    return (
        <div className="bg-gray-100">
            <h1 className="Zilla_Slab text-[48px] leading-[50.4px] pt-40 text-[#1D1C1C] pl-12">Articles</h1>
            <div className='relative flex flex-nowrap items-center bg-gray-100 pl-6
            whitespace-nowrap scroll-smooth overflow-x-scroll sco scrollbar-hidden md:overflow-x-hidden w-full h-full' ref={sliderRef}>
                {data.map((item: any, index:number) => (
                <div key={index} className="w-96 p-8">
                    <img
                        className='w-[400px] inline-block p-2 cursor-pointer hover:scale-105 object-cover ease-in-out duration-300'
                        src={item.img}
                        alt='Articles'
                    />
                    <h1 className="Montserrat_h1 text-[20px] leading-[30px] py-3">{item.header}</h1>
                    {item.slideText}
                    {item.button}
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