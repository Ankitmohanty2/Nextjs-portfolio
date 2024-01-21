import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5 }}

    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{ 
          x:-200,
          opacity:0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x:0,
          opacity:1,
        }}
        viewport={{ once: true }}
        src='/front.gif'
        width={500}
        className='-mb-20 md:mb-0 flex-shrink-0 w-59 h-59 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[500px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here&apos;s a <span className='underline decoration-purple-500'>little</span> background
        </h4>
        <p className='text-base'>
        
        Hey there! 👋 I'm Ankit Mohanty, an aspiring Frontend Developer passionate about creating captivating digital experiences. As a fresh graduate, I'm excited to embark on my journey in the tech world. Eager to contribute my skills, I'm actively exploring opportunities to learn and grow. Feel free to check out my evolving coding adventures on my blog and follow my journey as I dive into the world of user-centric tech. Let's connect and explore the possibilities together! 🚀💻  I'm all about creating seamless web experiences. 💻✨
        </p>
      </div>
    </motion.div>
  )
}
