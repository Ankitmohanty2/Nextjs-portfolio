import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

const WorkExperience = (props: Props) => {
  const experiences = [
    {
      title: 'Open-Source Contributor',
      organization: 'Hacktoberfest',
      logo: 'https://uno-website-assets.s3.amazonaws.com/wp-content/uploads/2023/10/02100331/1600_Hacktoberfest-scaled.jpg',
      link: 'https://hacktoberfest.com/',
      date: 'Oct 2023 - Nov 2023',
      description: [
        'Successfully merged 14 pull requests, showcasing proficiency in collaborative development',
        'Made substantial contributions during Hacktoberfest to various open-source projects',
        'Provided comprehensive documentation updates, ensuring clarity and accessibility for contributors and users alike',
        'Demonstrated effective teamwork by facilitating the merging process for various pull requests',
      ],
    },
    
    {
      title: 'Open-Source Contributor',
      organization: 'GirlScript Summer of Code',
      logo: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1623661215136/jPWcZyekD.png',
      link: 'https://gssoc.girlscript.tech/',
      date: 'May 2023 - Aug 2023',
      description: [
        'Spearheaded the development and implementation of multiple REACT-based projects, driving innovation in user experiences with cutting-edge UI design',
        'Revolutionized the user journey by seamlessly integrating universal search functionality across platforms',
        'Significantly elevated user engagement by 50 points, indicating a positive impact on overall user satisfaction and interaction',
        'Achieved a notable 20-point boost in conversion rates through the successful merging of 9 pull requests, reflecting the effectiveness of collaborative development efforts',
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center  scrollbar-track-gray-400/20 scrollbar-thumb-[#FF3800]/80'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  scrollbar-track-gray-400/20 scrollbar-thumb-[#FF3800]/80'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#a393eb]/80'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
