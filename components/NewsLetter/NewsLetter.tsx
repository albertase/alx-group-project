import React from 'react'

const NewsLetter: React.FC = () => {
  return (
    <div className="p-0 md:p-12 bg-gray-100">
      <div className='relative bg-gray-100 w-full h-[350px]'>
                <div className='absolute bg-[#E0D5DD] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg w-4/5 p-5 md:w-1/2 md:h-5/6 lg:w-1/2'>
                    <div className="flex flex-col gap-4">
                        <h1 className='Zilla_Slab_700 text-[29px] leading-[34.8px] text-center font-bold m-2'>Never miss  an update from me</h1>
                        <p className=' Montserrat text-[17px] leading-[20.72px] text-center text-sm font-[#0B0B0B]'>Know more about latest industry trends in Artificial Intelligence</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-evenly items-center mt-10 w-full">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-inherit placeholder:text-black placeholder:text-sm md:w-3/4 p-2 mx-2 my-2 md:my-0 border border-[#585151] outline-none rounded-xl"
                        />
                        <button
                            type="submit"
                            className="px-8 py-2 text-white text-[20px] rounded-xl bg-[#585151] md:w-auto"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NewsLetter
