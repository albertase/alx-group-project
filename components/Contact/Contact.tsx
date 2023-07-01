import React, {useState} from "react"



const Contact: React.FC = () => {

    return (
        <div className='grid bg-gray-100 grid-cols-1 py-24 sm:grid-cols-2 h-full w-full px-8'>
            <div className=''>
                <img className='w-full h-auto object-cover' src="/contact_pic.png" alt="Contact Picture" />
            </div>

            <div className='bg-gray-100 flex flex-col justify-center'>
                <div className="text-[#1D1C1C] px-8 flex flex-col gap-6">
                    <h1 className="Zilla_Slab_contact text-[45px] leading-[60px]">Get in Touch !</h1>
                    <p className="Montserrat_contact text-[22px] leading-[37px]">
                        I’m always interested in hearing about new projects and <br/>
                        opportunities, fill the form below or click the social media <br/>
                        icons below to reach out to me.</p>
                </div>
                <br/>
                <div className="flex gap-4 px-8">
                    <img src="/contact_linkedin.png" alt="Linked-in" className="w-16 h-16 rounded-full"/>
                    <img src="/contact_twitter.png" alt="Twitter" className="w-16 h-16 rounded-full"/>
                    <img src="/contact_email.png" alt="Email" className="w-16 h-16 rounded-full"/>
                </div>
                <form className='w-full mx-auto rounded-lg bg-gray-100 md:p-8 px-8'>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <input className='rounded-lg mt-2 p-6 focus:outline-none border-2 border-[#C3C2D2]'
                               type="text" placeholder="Full Name" />
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <input
                               className='p-6 rounded-lg mt-2 focus:outline-none border-2 border-[#C3C2D2]'
                               type="email"
                               placeholder="Email Address"/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <textarea name="" id="" placeholder={'Your Message...'}  className="focus:outline-none border-2 border-[#C3C2D2] rounded-lg p-10"/>
                    </div>
                    <div className="relative">
                        <button className=' my-5 py-6 px-20 bg-[#585151]  text-white font-semibold rounded-lg'>Submit</button>
                        <img src="/contact_send.png" alt="" className="absolute top-12 left-40"/>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Contact


