import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
            initial = {{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}

            animate = {{
                x: 0,
                opacity: 1,
                scale: 1
            }}

            transition = {{
                duration: 1.5,
            }}
            className='flex flex-row items-center'
            >
            {/* Social icons */}
            <SocialIcon 
                url="https://www.linkedin.com/in/ankit-mohanty-3036ba209/" 
                fgColor='gray' 
                bgColor='transparent'
            />
            <SocialIcon 
                url="https://medium.com/@mohantyankit619"
                fgColor='gray' 
                bgColor='transparent' 
            />
            <SocialIcon 
                url="https://github.com/AnkitMohanty2/" 
                fgColor='gray' 
                bgColor='transparent' 
            />
            <SocialIcon 
                url="https://open.spotify.com/user/ic9rbljwig5wnabuxa47te6a0" 
                fgColor='gray' 
                bgColor='transparent' 
            />
        
        </motion.div>

        <motion.div 
            initial = {{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}

            animate = {{
                x: 0,
                opacity: 1,
                scale: 1
            }}

            transition = {{
                duration: 1.5,
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
                className='cursor-pointer'
                network='email'
                fgColor='gray'
                bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-grey-400'>
                Get In Touch
            </p>
        </motion.div>
    </header>
  )
}