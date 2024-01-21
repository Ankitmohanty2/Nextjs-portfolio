import React from 'react';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.5 }}
      className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
    >
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        src={imageSrc}
        alt='project'
      />

      <div className='space-y-10 px-0 md:px-10 max-w6xl'>
        <h4 className='text-4xl font-semibold text-center'>
          <span className='underline text-blue-500 decoration-blue-500/50'>
            {title}
          </span>
        </h4>

        <p className='text-lg text-center md:text-left'>{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
