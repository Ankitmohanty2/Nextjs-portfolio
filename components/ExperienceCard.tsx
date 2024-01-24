import React from 'react';
import { motion } from 'framer-motion';

type Experience = {
  title: string;
  organization: string;
  logo: string;
  link: string;
  date: string;
  description: string[];
};

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  const { title, organization, logo, link, date, description } = experience;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="/user_icon.png"
        alt={title}
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{title}</h4>
        <p className='font-blod text-2xl mt-1'>{organization}</p>
        <div className='flex space-x-2 my-2'>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <img className='h-10 w-10' src={logo} alt={organization} />
          </a>
        </div>
        <p className='uppercase py-5 text-gray-300'>{date}</p>

        <ul className='list-disc space-y-4 ml-5 text-lg h-[200px] overflow-y-scroll
        scrollbar
         scrollbar-track-gray-400/20 scrollbar-thumb-[#a393eb]/80'>
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
