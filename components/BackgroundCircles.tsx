import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircles({}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: [0.1, 0.6, 0.7, 0.8, 1],
                scale: [1, 2, 1],
                //rotate: [0, 360],
                borderRadius: ['20%', '50%', '20%'],
            }}
            transition={{
                duration: 1,
            }}
            className="relative top-10 flex justify-center items-center"
        >
            <div className="absolute border border-[#333333] rounded-full h-[13rem] w-[13rem] mt-52 animate-ping" />
            <div className="absolute border border-[#79787860] rounded-full h-[18rem] w-[18rem] mt-52 animate-ping" />
            <div className="absolute border border-[#333333] rounded-full h-[25rem] w-[25rem] mt-52 animate-ping" />
            <div className="absolute border border-[#F7AB0A] opacity-20 rounded-full h-[28rem] w-[28rem] mt-52 animate-pulse" />
        </motion.div>
    );
}
