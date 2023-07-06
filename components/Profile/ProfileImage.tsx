import React from 'react'


const BgImage: string = '/Elisha_bg.svg'

const ProfileImage: React.FC = () => {
    return (
        <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative mt-[-14px]" style={{backgroundImage: `url(${BgImage})`, width: '100%', height: '100vh',}}>
            <p id="align_left" className='Zilla_change absolute pl-0 md:pl-3 top-[62%] md:top-72  md:left-52 text-[29px] md:text-[58px] text-[#585151]'> <span> PURPOSE </span><br /> <span> PASSION </span><br /> <span> PERFORMANCE </span></p>
        </div>
  )
}

export default ProfileImage