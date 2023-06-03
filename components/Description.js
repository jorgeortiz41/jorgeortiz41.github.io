import React from 'react'
import { motion } from 'framer-motion'

const descriptionVariants = {
    offscreen: {
        opacity: 0,
        y: 20,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            delay: 0.3,
        },
    },
}



function Description() {
  return (
    <motion.div
    initial='offscreen'
    whileInView='onscreen'
    viewport={{ once: true, amount: 0.8 }}
    variants={descriptionVariants}
    >
        <div class="row-span-2 text-left w-full mx-0  mt-96 text-4xl text-white font-montserrat font-extrabold tracking-wide ...">
            <h1 class='border-l-2 border-blue-900 pl-3'>PORTFOLIO OF JORTIZ</h1>
            <div class=" text-left w-full  text-xl font-montserra font-light tracking-widest ...">
                <h3 class='leading-loose text-white/50 mr-20 mt-8'>
                    I specialize in full-stack development. I also like to dabble in data science and machine learning.
                    Some of the tools I use are:
                    <span class=' block leading-loose text-white/70 font-bold'>React, Next.js, TypeScript, and Python</span>
                    <span class=' block leading-loose text-white/70 font-bold'>Node.js, Express.js, MongoDB</span>
                    Currently working at <a class='underline decoration-blue-900 hover:text-blue-900 visited:text-purple-600' href='https://www.redventures.com/' target='_blank'>Red Ventures Puerto Rico</a> as a Software Engineer Intern.
                </h3>
            </div>
        </div>
    </motion.div>
  )
}

export default Description