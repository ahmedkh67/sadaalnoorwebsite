"use client"

import React from "react";
import { motion } from "motion/react";
import { easeOut } from "motion";
import Logo from '@/public/Logo.svg'
import Image from "next/image";
const Loadingcomp = () => {
  return (
    <motion.div initial={{translateY: 0}} animate={{translateY: -900}} 
        transition={{duration: 0.8 , ease: easeOut, delay: 1.5}} className="flex w-full h-screen bg-white 
        fixed top-0 left-0 z-40 justify-center items-center ">
            <div className="flex overflow-hidden ">
            <motion.div initial={{opacity:0, scale: 1.2}} animate={{opacity: 1, scale: 1}} 
                    transition={{ease: easeOut}} className="flex flex-row-reverse rounded-3xl justify-start 
                    items-center px-2 animatedownn">
                     <Image src={Logo} width={350} height={10} alt="icon star" /> 
                       
                    </motion.div>

            </div>
    </motion.div>
  )
}

export default Loadingcomp