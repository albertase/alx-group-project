import React from "react"
import Button from "@/components/Button/Button";
import Image from "next/image";
import {products} from "@/components/mockData";


const Product: React.FC = () => {
    return (
        <div className="mt-32">
            <div className="py-20 m-auto w-44">
                <h1 className="text-[#333333] rounded-br-3xl rounded-tl-3xl text-[35px] bg-[#C3C2D2] p-4 leading-[42px] Zilla_Slab_h1">Products</h1>
            </div>
            {products.map((data, index) => (
                <div key={index} className="flex mb-12 flex-col rounded-[23px] md:flex-row items-center md:justify-around w-full h-full bg-[#C3C2D2] md:p-24">
                    <div className=" flex flex-col gap-10 items-center md:items-baseline w-96 h-[297px]">
                        <h1 className="Zilla_Slab_h1 text-[45px] leading-[42px] text-[#0B0B0B]">{data.header}</h1>
                        <p className="Montserrat_h1 text-[#0B0B0B] text-[14px] leading-[22.47px]">{data.text}</p>
                        {data.button}
                    </div>
                    <div className="relative">
                        <img src={data.img} alt="Blank System"/>
                    </div>
                </div>
            ))}

        </div>


    )
}


export default Product