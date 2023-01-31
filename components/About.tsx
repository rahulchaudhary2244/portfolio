import Image from 'next/image';
import React from 'react';
import heroImgSrc from '../about-img.png';
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';
import { useTypewriter } from 'react-simple-typewriter';

type Props = { pageInfo: PageInfo };

export default function About({
    pageInfo: { profilePic, backgroundInformation },
}: Props) {
    return (
        <div
            className="h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-7xl px-10 
        justify-evenly items-center mx-auto"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: false }}
                className="relative overflow-hidden mt-40 md:mt-20 flex-shrink-0 rounded-full md:rounded-lg w-56 h-56 xl:w-[400px] xl:h-[400px]"
            >
                <Image
                    src={urlFor(profilePic).url()}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                className="space-y-10 px-0 md:px-10"
            >
                <h4 className="text-4xl font-semibold">
                    Life is short{' '}
                    <span className="underline decoration-[#F7AB0A]/50">
                        beautiful
                    </span>
                    {' .'}
                </h4>
                <p className="text-sm">{backgroundInformation}</p>
            </motion.div>
        </div>
    );
}
