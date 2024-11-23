import React from 'react';
import Lottie from 'lottie-react';
import BouncingDoctor from '../assets/JumpingDoctor.json';
import TypingEffect from './TypingEffect';

const Doctor = () => {
  return (
    <>
    <div className='flex align-middle justify-center place-content-center'>
        <Lottie animationData={BouncingDoctor} loop={true} className='w-[350px]'/>
    </div>
        <TypingEffect />
    </>
  );
};

export default Doctor;
