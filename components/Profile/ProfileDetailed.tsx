import React from 'react'
import Image from 'next/image';
import Button from '../Button/Button';
import Link from "next/link";

const DetailedProfile: string = "/Elisha_fold_arm.png"

const ProfileDetailed: React.FC = () => {
    return (
        <div className="raps bg-gray-100 md:flex items-center md:justify-between md:items-center gap-8 md:h-fit">
            <div className="md:w-2/4 md:px-12">
                <p className='w-full md:leading-20 m-auto overflow-x-hidden Montserrat text-[20px] md:text-[24px] leading-10 p-3'>
                Ukaegbu Albert, a skilled Frontend Engineer, is dedicated
                 to crafting exceptional user interfaces and optimizing web
                  applications for superior user experiences. With a strong
                   background in frontend architecture and UI/UX design, Albert
                    is committed to his work. He is currently a part of Cre8ive Inc.,
                    an innovative AI research and innovation company based 
                    in Nigeria, Africa, where he contributes to the company mission
                    of advancing AI technology.
                </p>
                <div className='p-3'>
                    <Link href="/about">

                    <Button>
                        Read more
                    </Button>
                    </Link>

                </div>

            </div>
            <div className="bg-[#E0D5DD] md:w-2/4 md:h-fit md:pr-12">
                <Image
                    className="m-auto md:object-cover md:inset-0 md:h-fit lg:object-contain "
                    src="/background.jpeg"
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