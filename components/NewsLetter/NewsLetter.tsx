import React from 'react'

const NewsLetter = () => {
  return (
    <div>
      <div className='relative bg-white w-full h-[300px]'>
                <div className='absolute bg-[#E0D5DD] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg w-3/4 p-5 md:w-1/2 lg:w-1/3'>
                    <h1 className='text-center font-bold m-2'>Never miss  an update from me</h1>
                    <p className='text-center text-sm font-[#0B0B0B]'>Know more about latest industry trends in Artificial Intelligence</p>

                    <div className="flex flex-col md:flex-row justify-evenly items-center mt-10 w-full">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="w-full bg-inherit placeholder:text-black placeholder:text-sm md:w-3/4 p-1.5 mx-2 my-2 md:my-0 border border-[#585151] outline-none rounded-xl"
                        />
                        <button
                            type="submit"
                            className="px-6 py-1.5 text-white rounded-xl bg-[#585151] md:w-auto"
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
