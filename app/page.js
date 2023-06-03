'use client'; // Error components must be Client Components

import Image from 'next/image'
import {motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react';
import Description from '@/components/Description';
import { LoremIpsum } from "../components/LoremIpsum";
 

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      backgroundColor: "white",
      transition: {
        duration: 0.1,
      },
    },
    text: {
      height: 12,
      width: 12,
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      transition: {
        duration: 0.1,
      },
    },
  };

  const textEnter = () => {
    setCursorVariant("text");

  };

  const textLeave = () => {
    setCursorVariant("default");
  };

  const buttonEnter = () => {
    setCursorVariant("button");
  };

  const buttonLeave = () => {
    setCursorVariant("default");
  };


  return (
    <>
      {/* BELOW IS THE SCROLL ANIMATION */}
      <motion.div class='fixed top-0 left-0 right-0 h-5 bg-blue-900 origin-[0%]' style={{ scaleX }} />


      {/* BELOW IS THE FIRST COLUMN WITH THE LOGO */}
      <div class="grid grid-cols-5 gap-4">
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.button
           class="fixed justify-start mt-24 ml-24 h-10 w-32 ..."
           initial={{ opacity: 0, x: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
           whileHover={{ 
                   x: [-5, 5, -3, 3, -2, 2, 0],
             transition: {
               duration: 0.3,
             },
            }}
           >
            <img src="/jortiz.svg" alt="jortiz logo" />
          </motion.button>
        </motion.div>

        {/* BELOW IS THE SECOND COLUMN TITLE AND DESCRIPTION */}

        <div class="grid col-span-4 grid-row-10 gap-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100}}
        >
          <div class="row-span-2 text-left w-full mx-0  mt-52 text-4xl text-white font-montserrat font-black tracking-wide ...">
            <h1>JORGE ORTIZ - SOFTWARE ENGINEER</h1>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <div class=" text-left w-full  text-3xl font-montserra font-light tracking-widest ...">
            <h3 class='leading-loose text-white/50 mr-48'>passionate about crafting digital experiences that delight,
             empower, and inspire. My core values are authenticity, minimalism and independent thinking.
              I love everything at the intersection of tech, design and philosophy. 
              I am currently working on a few projects that I will be sharing soon.</h3>
          </div>

          {/* BELOW IS THE 2nd COLUMN-2nd ROW  WITH THE LINK BUTTONS */}

            <div class="flex justify-end mr-48 mt-16 p-3 text-center text-xl font-extrabold tracking-wide text-blue-700 space-x-24">
              <motion.div
                class="h-10 w-60 rounded-lg z-40 border-2 border-blue-500 ..."
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                See my work 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 m-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </motion.div>
              <motion.div
                class="h-10 w-60 rounded-lg z-40 border-2 border-blue-500 ..."
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                

              </motion.div>
            </div>

        </motion.div>  

        {/* BELOW IS 2nd COLUMN-3rd ROW WITH PORTFOLIO DESCRIPTION */}

        <Description />

      </div>
      
      {/* BELOW IS SVG BLUE WAVES*/}

            <div class="col-span-5">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  >
                  <svg class="absolute inset-y-80 opacity-10 md:opacity-30 z-0" id="visual" viewBox="0 0 1960 540" width="1960" height="540" xmlns="http://www.w3.org/2000/svg" version="1.1"><path d="M0 353L27.2 358.5C54.3 364 108.7 375 163.2 379.7C217.7 384.3 272.3 382.7 326.8 374C381.3 365.3 435.7 349.7 490 344.3C544.3 339 598.7 344 653.2 347.3C707.7 350.7 762.3 352.3 816.8 358.3C871.3 364.3 925.7 374.7 980 380.5C1034.3 386.3 1088.7 387.7 1143.2 379.3C1197.7 371 1252.3 353 1306.8 347C1361.3 341 1415.7 347 1470 350.8C1524.3 354.7 1578.7 356.3 1633.2 352.5C1687.7 348.7 1742.3 339.3 1796.8 338.8C1851.3 338.3 1905.7 346.7 1932.8 350.8L1960 355L1960 541L1932.8 541C1905.7 541 1851.3 541 1796.8 541C1742.3 541 1687.7 541 1633.2 541C1578.7 541 1524.3 541 1470 541C1415.7 541 1361.3 541 1306.8 541C1252.3 541 1197.7 541 1143.2 541C1088.7 541 1034.3 541 980 541C925.7 541 871.3 541 816.8 541C762.3 541 707.7 541 653.2 541C598.7 541 544.3 541 490 541C435.7 541 381.3 541 326.8 541C272.3 541 217.7 541 163.2 541C108.7 541 54.3 541 27.2 541L0 541Z" fill="#0956ef"></path><path d="M0 428L27.2 421.3C54.3 414.7 108.7 401.3 163.2 400.2C217.7 399 272.3 410 326.8 408.5C381.3 407 435.7 393 490 384.5C544.3 376 598.7 373 653.2 374.7C707.7 376.3 762.3 382.7 816.8 387.7C871.3 392.7 925.7 396.3 980 396.3C1034.3 396.3 1088.7 392.7 1143.2 389.8C1197.7 387 1252.3 385 1306.8 389C1361.3 393 1415.7 403 1470 408.2C1524.3 413.3 1578.7 413.7 1633.2 411.3C1687.7 409 1742.3 404 1796.8 398.5C1851.3 393 1905.7 387 1932.8 384L1960 381L1960 541L1932.8 541C1905.7 541 1851.3 541 1796.8 541C1742.3 541 1687.7 541 1633.2 541C1578.7 541 1524.3 541 1470 541C1415.7 541 1361.3 541 1306.8 541C1252.3 541 1197.7 541 1143.2 541C1088.7 541 1034.3 541 980 541C925.7 541 871.3 541 816.8 541C762.3 541 707.7 541 653.2 541C598.7 541 544.3 541 490 541C435.7 541 381.3 541 326.8 541C272.3 541 217.7 541 163.2 541C108.7 541 54.3 541 27.2 541L0 541Z" fill="#0f3fcc"></path><path d="M0 428L27.2 434C54.3 440 108.7 452 163.2 455.5C217.7 459 272.3 454 326.8 451C381.3 448 435.7 447 490 450C544.3 453 598.7 460 653.2 460C707.7 460 762.3 453 816.8 444.8C871.3 436.7 925.7 427.3 980 426.5C1034.3 425.7 1088.7 433.3 1143.2 441.5C1197.7 449.7 1252.3 458.3 1306.8 461.2C1361.3 464 1415.7 461 1470 459.2C1524.3 457.3 1578.7 456.7 1633.2 457.7C1687.7 458.7 1742.3 461.3 1796.8 458.7C1851.3 456 1905.7 448 1932.8 444L1960 440L1960 541L1932.8 541C1905.7 541 1851.3 541 1796.8 541C1742.3 541 1687.7 541 1633.2 541C1578.7 541 1524.3 541 1470 541C1415.7 541 1361.3 541 1306.8 541C1252.3 541 1197.7 541 1143.2 541C1088.7 541 1034.3 541 980 541C925.7 541 871.3 541 816.8 541C762.3 541 707.7 541 653.2 541C598.7 541 544.3 541 490 541C435.7 541 381.3 541 326.8 541C272.3 541 217.7 541 163.2 541C108.7 541 54.3 541 27.2 541L0 541Z" fill="#0b27aa"></path>
                  <path d="M0 481L27.2 482C54.3 483 108.7 485 163.2 488.8C217.7 492.7 272.3 498.3 326.8 497.8C381.3 497.3 435.7 490.7 490 486.3C544.3 482 598.7 480 653.2 476.8C707.7 473.7 762.3 469.3 816.8 471.8C871.3 474.3 925.7 483.7 980 488.2C1034.3 492.7 1088.7 492.3 1143.2 488C1197.7 483.7 1252.3 475.3 1306.8 470.8C1361.3 466.3 1415.7 465.7 1470 468.5C1524.3 471.3 1578.7 477.7 1633.2 478C1687.7 478.3 1742.3 472.7 1796.8 475.8C1851.3 479 1905.7 491 1932.8 497L1960 503L1960 541L1932.8 541C1905.7 541 1851.3 541 1796.8 541C1742.3 541 1687.7 541 1633.2 541C1578.7 541 1524.3 541 1470 541C1415.7 541 1361.3 541 1306.8 541C1252.3 541 1197.7 541 1143.2 541C1088.7 541 1034.3 541 980 541C925.7 541 871.3 541 816.8 541C762.3 541 707.7 541 653.2 541C598.7 541 544.3 541 490 541C435.7 541 381.3 541 326.8 541C272.3 541 217.7 541 163.2 541C108.7 541 54.3 541 27.2 541L0 541Z" fill="#060013fe"></path>
                  </svg>
                  </motion.div>
            </div>
      </div>

      {/*CURSOR ELEMENT*/}

      <motion.div
       class='fixed pointer-events-none bg-blue-800 h-6 w-6 rounded-full top-0 left-0 z-50' 
       variants={variants}
       animate={cursorVariant}
       >
      </motion.div>.

    </>
  )
}
