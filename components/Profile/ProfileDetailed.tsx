import React from 'react'
// import DetailedProfile from "../../public/Elisha_fold_arm.png"
import Image from 'next/image';
import Button from '../Button/Button';

const DetailedProfile = "/Elisha_fold_arm.png"

const ProfileDetailed = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col justify-center">
                <p className='Montserrat text-[20px] leading-[39.9px] p-24 w-full'>Odemakinde Elisha is a leading Innovative AI Engineer <br />
                    and Research Scientist with professional experience in <br />
                    AI relating to vision analytics. He is a skilled technical <br />
                    Entrepreneur with proven experience in AI app <br />
                    conceptualization design, architectural flow, product <br />
                    development, testing and production level builds of AI <br />
                    systems on GPUs and TPUs. He is building Rectlabs <br />
                    Inc, an AI research and Innovation company based in <br /> 
                    Nigeria, Africa.</p>
                    <Button>
                        Read more
                    </Button>
            </div>
            <div className="bg-[#E0D5DD]">
                <Image src={DetailedProfile} alt="Elisha" width={500} height={300} />
            </div>
        </div>
    )
}

export default ProfileDetailed