import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Mentorship: React.FC = () => {
  return (
    <div>
      <div className='relative bg-black w-full h-[750px] text-black'>
        <h1 className=' Zilla_Slab absolute left-12 top-5 z-5 text-[32px] text-xl text-white'>Mentorship</h1>
        <div className='absolute m-12 p-10 z-5 bg-[#E0D5DD] flex-wrap md:flex-nowrap gap-5 inset-0 flex md:justify-around items-center'>
          <Image
            className="rounded object-cover md:w-[540px] rounded-br-[84px] rounded-tl-[84px]"
            src="/mentorship.png"
            alt="A man and a woman looking at a computer"
            width={340}
            height={100}
            priority
          />
          <div className='flex flex-col gap-2 lg:gap-8 w-[500px] md:h-72 min-h-96'>
            <h1 className='Zilla_Slab_700 text-[17px] md:text-[29px] md:leading-[34.8px] text-[#1D1C1C] md:text-left'>Get access to One-on-One Mentorship</h1>
            <p className='Montserrat text-[19px] leading-[20.75px] md:leading-[30.75px] md:overflow-x-hidden max-w-full md:text-left'>
              Odemakinde Elisha is passionate about mentoring
              young AI Engineers into becoming much more
              practical developers; who are able to democratize AI
              for the next billion users.
            </p>
            <div>
              <Link href="https://calendly.com/elishatofunmi" as="https://calendly.com/elishatofunmi">
              <button className="px-4 py-2.5 text-white rounded-lg bg-[#585151] w-full md:w-auto">
                Get In Touch
              </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;
