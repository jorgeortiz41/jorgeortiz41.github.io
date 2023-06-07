'use client';

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

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

const projects = {
    "reu": {
        title: 'AOStatus',
        description: 'A simple status window and logging tool for Arecibo\'s 12 meter Radio Telescope.',
        image: '/REU.png',
    },
    "todo": {
        title: 'Todo App',
        description: 'A simple todo app built with Next/React and Material UI. Uses MongoDB for data storage and has features such as editing, deleting, creating new lists, and categorizing tasks.',
        image: '/todo.png',
    },
};



function Description() {
  return (
    <>
        <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.6 }}
        variants={descriptionVariants}
        >
            <div class="row-span-2 text-left w-full mx-0  mt-64 text-4xl text-white font-montserrat font-extrabold tracking-wide ...">
                <h1 class='border-l-2 border-blue-900 pl-3'>PROOF OF WORK</h1>
                <div class=" flex items-center justify-between mr-48 ...">
                    <div class="relative flex justify-start mt-12 py-9 h-80 w-6/12 bg-gradient-to-r from-blue-700 to-blue-900 ...">
                        <div class=" ">
                        <Image class='absolute object-cover left-24 hover:object-scale-down shadow-2xl' height={500} width={500} src={projects.reu.image} alt='REU Project'  />
                        </div>
                    </div>
                    <h1 class='text-9xl font-montserrat font-extrabold tracking-wide text-blue-900 ...'>01</h1>
                </div>
            </div>
            <div class="mt-6 text-left w-full  text-2xl font-montserra font-light ...">
                <h1 class='leading-loose mr-48'>
                    <span class='font-bold text-white '>{projects.reu.title} </span> 
                    <span class='text-white/50'>- {projects.reu.description}</span>
                    </h1>
            </div>
        </motion.div>

        <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.6 }}
        variants={descriptionVariants}
        >
            <div class="row-span-2 text-left w-full mx-0  mt-48 text-4xl text-white font-montserrat font-extrabold tracking-wide ...">
                <div class=" flex items-center justify-between mr-48 ...">
                    <div class="relative flex justify-start mt-12 py-9 h-80 w-6/12 bg-gradient-to-r from-blue-700 to-blue-900 ...">
                        <div class=" ">
                        <Image class='absolute object-cover left-24 hover:object-scale-down shadow-2xl' height={500} width={500} src={projects.todo.image} alt='REU Project'  />
                        </div>
                    </div>
                    <h1 class='text-9xl font-montserrat font-extrabold tracking-wide text-blue-900 ...'>02</h1>
                </div>
            </div>
            <div class="mt-6 text-left w-full  text-2xl font-montserra font-light ...">
                <h1 class='leading-loose mr-48'>
                    <span class='font-bold text-white '>{projects.todo.title} </span> 
                    <span class='text-white/50'>- {projects.todo.description}</span>
                    </h1>
            </div>
        </motion.div>

        <motion.div
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true, amount: 0.6 }}
        variants={descriptionVariants}
        >
            <div class="row-span-2 text-left w-full mx-0  mt-48 text-4xl text-white font-montserrat font-extrabold tracking-wide ...">
                <div class=" flex items-center justify-between mr-48 ...">
                    <div class="relative flex justify-start mt-12 py-9 h-80 w-6/12 bg-gradient-to-r from-blue-700 to-blue-900 ...">
                        <div class=" ">
                        <Image class='absolute object-cover left-24 hover:object-scale-down shadow-2xl' height={500} width={500} src={projects.reu.image} alt='REU Project'  />
                        </div>
                    </div>
                    <h1 class='text-9xl font-montserrat font-extrabold tracking-wide text-blue-900 ...'>03</h1>
                </div>
            </div>
            <div class="mt-6 text-left w-full  text-2xl font-montserra font-light ...">
                <h1 class='leading-loose mr-48'>
                    <span class='font-bold text-white '>{projects.reu.title} </span> 
                    <span class='text-white/50'>- {projects.reu.description}</span>
                    </h1>
            </div>
        </motion.div>

    </>
  )
}

export default Description