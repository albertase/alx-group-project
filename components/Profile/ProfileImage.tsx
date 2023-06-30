import React from 'react'


const BgImage: string = '/Elisha_bg.svg'

const ProfileImage: React.FC = () => {
    return (
        <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative mt-[-14px]" style={{backgroundImage: `url(${BgImage})`}}>
            <p className='Zilla_change absolute pl-3 md:pl-0 md:top-52 md:left-52 text-[20px] md:text-[58px] text-[#000000]'> <span> PURPOSE </span><br /> <span> PASSION </span><br /> <span> PERFORMANCE </span></p>
        </div>
  )
}

export default ProfileImage