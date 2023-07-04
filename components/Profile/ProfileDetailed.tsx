import React from 'react'
import Image from 'next/image';
import Button from '../Button/Button';
import Link from "next/link";

const DetailedProfile: string = "/Elisha_fold_arm.png"

const ProfileDetailed: React.FC = () => {
    return (
        <div className="raps bg-gray-100 md:flex items-center md:justify-between md:items-center gap-8 md:h-fit">
            <div className="md:w-2/4">
                <p className='w-full md:leading-20 m-auto Montserrat text-[20px] leading-10 p-3'>
                    Odemakinde Elisha is a leading Innovative AI Engineer and Research Scientist with professional experience in AI relating to vision analytics. He is a skilled technical Entrepreneur with proven experience in AI app conceptualization design, architectural flow, product development, testing and production level builds of AI systems on GPUs and TPUs. He is building <Link className="bg-[#585151] italic text-white border-b-4 hover:border-blue-700" href="https://rectlabs.com" as="/redirect-page"> Rectlabs Inc,</Link> an AI research and Innovation company based in Nigeria, Africa.
                </p>
                <div className='p-3'>
                    <Button>
                        Read more
                    </Button>
                </div>

            </div>
            <div className="bg-[#E0D5DD] md:w-2/4 md:h-fit">
                <Image
                    className="m-auto md:object-cover md:inset-0 md:h-fit lg:object-contain "
                    src="/secondPicOfLandingPage.png"
                    alt="Elisha"
                    width={740}
                    height={565}
                    priority
                />
            </div>
        </div>
    )
}

export default ProfileDetailed