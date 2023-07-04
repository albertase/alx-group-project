import React from "react"


const About: React.FC = () => {
    return (
        <div className="h-full">
            <h1 className="text-center pt-28 md:pt-52 text-[#000000] Zilla_Slab sm:text-[40px] md:text-[58px] leading-[70px]">ELISHA ODEMAKINDE</h1>
            <div className="flex flex-col flex-wrap gap-12 rap p-8 md:flex-row md:flex-nowrap">
                <div className=" md:h-[755px] break-words w-full md:pl-12 overflow-x-hidden"> <br/><br/><br/>
                    <p className="Montserrat text-[#1D1C1C] break-words w-full text-[20px] md:text-[18px] md:leading-[44.98px]">
                        Odemakinde Elisha is a leading Innovative AI Engineer and Research
                        Scientist with professional experience in AI relating to vision analytics.
                        He is a skilled technical Entrepreneur with proven experience in AI
                        app conceptualization design, architectural flow, product
                        development, testing and building production level AI systems on
                        GPUs and TPUs. He is currently building Rectlabs Inc, an AI based
                        research / production innovation company based in lagos, Nigeria. <br/><br />

                        He is a passionate individual, determined and result oriented engineer
                        who has served in leadership capacity such as technical AI product
                        lead, R/D lead, technical product manager, engineering manager and
                        CTO. He is an AI advocate, who has equipped and raised a number of
                        data scientist, ML/AI Engineers and deep learning engineers during
                        his undergraduate days and still in the business of raising and
                        equipping more talents.</p>
                </div>
                <div className="bg-[#E0D5DD] w-full h-fit p-1 text-center">
                    <img src="/about.JPG" alt="About Elisha" className="m-auto"/>
                </div>
            </div>
        </div>
    )
}

export default About


