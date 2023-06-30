import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className='bg-[#585151] text-white font-[Poppins] p-2 md:py-3 md:px-7 rounded md:mr-[8px] hover:bg-[#585150] duration-500'>
      {children}
    </button>
  );
};

export default Button;