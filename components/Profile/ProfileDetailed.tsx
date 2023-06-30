import React from 'react'
// import DetailedProfile from "../../public/Elisha_fold_arm.png"
import Image from 'next/image';
import Button from '../Button/Button';

const DetailedProfile: string = "/Elisha_fold_arm.png"

const ProfileDetailed: React.FC = () => {
    return (
        <div className="raps bg-gray-100 md:flex md:justify-around gap-8 md:h-[565px]">
            <div className="flex flex-col justify-center">
                <p className='Montserrat whitespace-normal sm:whitespace-nowrap break-words sm:break-normal text-[20px]  leading-[41.9px] p-16'>
                    Odemakinde Elisha is a leading Innovative AI Engineer <br />
                    and Research Scientist with professional experience in <br />
                    AI relating to vision analytics. He is a skilled technical <br />
                    Entrepreneur with proven experience in AI app <br />
                    conceptualization design, architectural flow, product <br />
                    development, testing and production level builds of AI <br />
                    systems on GPUs and TPUs. He is building Rectlabs <br />
                    Inc, an AI research and Innovation company based in <br />
                    Nigeria, Africa. <br /><br />
                    <Button>
                        Read more
                    </Button>
                </p>
            </div>
            <div className="bg-[#E0D5DD] md:px-20">
                <img src="/Elisha_fold_arm.png" alt="Elisha" className="w-full h-full object-cever" />
                {/*<img src="/Elisha_fold_arm.png" alt="" className="md:max-w-full"/>*/}
            </div>
        </div>
    )
}

export default ProfileDetailed