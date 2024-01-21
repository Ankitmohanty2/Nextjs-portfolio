import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

type MainComponentProps = {};

const MainComponent: React.FC<MainComponentProps> = () => {
  // Define an array of skills with unique IDs
  const skillsArray = [
    { id: "Html5", directionLeft: true, src: 'https://cdn-icons-png.flaticon.com/512/1216/1216733.png', percent: 90 },
    { id: "Css3", src: 'https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png', percent: 80 },
    { id: "Javascript", directionRight: true, src: 'https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png', percent: 80},
    { id: "C++", directionRight: true, src: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png', percent: 70 },
    { id: "React", directionLeft: true, src: 'https://shethink.in/wp-content/uploads/2021/07/react.js-img.png', percent: 80 },
    { id: "Node Js", src: 'https://assets-global.website-files.com/6377ac1a39ff1e65214224e5/64d26ed86e11616a1694d599_6489d0aa90af17a5ae65e276_nodejs-1-logo.png', percent: 75  },
    { id: "MongoDb", directionRight: true, src: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png", percent: 70 },
    { id: "Next js", directionRight: true, src: 'https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png', percent: 70 },
    { id: "Express Js", directionLeft: true, src: 'https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png', percent: 70 },
    { id: "Tailwind Css", src: 'https://cdn-images.himalayas.app/9w3a704t88nxt617os94xdamvz15', percent: 70 },
    { id: "My Sql", directionRight: true, src: 'https://styles.redditmedia.com/t5_2qm6k/styles/communityIcon_dhjr6guc03x51.png', percent: 75 },
    { id: "Graphql", directionRight: true, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png', percent: 60 },
    { id: "Docker", directionRight: true, src: 'https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png', percent: 50 },
    { id: "Java", directionRight: true, src: 'https://www.macworld.com/wp-content/uploads/2023/01/learn_java_on_mac.jpg?quality=50&strip=all', percent: 70 },
    { id: "Typescript", directionRight: true, src: 'https://titrias.com/files/2022/04/typescript.png', percent: 60 },
    { id: "Figma", directionRight: true, src: 'https://zeroheight-wordpress-uploads.s3.amazonaws.com/wp-content/uploads/2022/11/small-icon_figma.png', percent: 60 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex relative flex-wrap text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3>

      {/* Map over skillsArray and render the Skill component for each skill */}
      {skillsArray.map((skill, index) => (
        <React.Fragment key={skill.id}>
          <Skill directionLeft={skill.directionLeft} src={skill.src} percent={skill.percent} />
          {/* Add a line break after every 4 skills with less spacing */}
          {index !== skillsArray.length - 1 && (index + 1) % 4 === 0 && <div className="w-full mt-2" key={index}></div>}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default MainComponent;