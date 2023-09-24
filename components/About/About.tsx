import React from "react"
import Link from "next/link";


const About: React.FC = () => {
    return (
        <div className="h-full">
            <h1 className="text-center pt-28 md:pt-52 text-[#000000] Zilla_Slab sm:text-[40px] md:text-[58px] leading-[70px]">UKAEGBU ALBERT</h1>
            <div className="flex flex-col flex-wrap gap-12 rap p-8 md:flex-row md:flex-nowrap">
                <div className="bg-[#E0D5DD] w-full h-fit p-1 text-center">
                    <img src="/mentor1.jpeg" alt="About Elisha" className="m-auto"/>
                </div>
                <div className=" md:h-[755px] break-words w-full md:pl-12 overflow-x-hidden"> <br/><br/><br/>
                    <p className="Montserrat text-[#1D1C1C] break-words w-full text-[20px] md:text-[18px] md:leading-[44.98px]">
                    Ukaegbu Albert, a seasoned Frontend Engineer, specializes 
                    in crafting exceptional user interfaces. He excels in designing,
                     developing, and optimizing user experiences for web applications.
                      Albert is also part of Cre8ive Inc, an innovative AI-based research
                       and production company in Lagos, Nigeria. <br/><br />

                       He is a driven and results-oriented Frontend Engineer
                        with a track record of leadership roles, including technical AI 
                        product lead, R&D lead, technical product manager, and 
                        engineering manager. He is a passionate advocate for frontend
                         development and has a history of mentoring and nurturing 
                         talent in the field.</p>
                </div>
            </div>
        </div>
    )
}

export default About


