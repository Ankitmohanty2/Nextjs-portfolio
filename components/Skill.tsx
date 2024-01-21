import React from 'react';
import { motion } from 'framer-motion';

type SkillProps = {
  directionLeft?: boolean;
  src: string;
  percent?: number; // Make percent prop optional
};

function Skill({ directionLeft, src, percent }: SkillProps) {
  return (
    <div className='group relative flex cursor-pointer mr-4'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={src}
        alt="Skill Image"
        className='rounded-full border border-gray-500 object-cover w-15 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          {percent !== undefined && (
            <p className='text-3xl font-bold text-black opacity-100'>{percent}%</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Skill;
