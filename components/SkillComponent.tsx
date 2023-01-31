import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skill } from '@/typings';
import { urlFor } from '@/sanity';

type Props = { directionLeft?: boolean; skill: Skill };

export default function SkillComponent({ directionLeft, skill }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden border border-gray-500 bg-white rounded-full w-[60px] h-[60px] 2xl:w-32 2xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
            >
                <Image
                    src={urlFor(skill.image).url()}
                    alt="Picture of the author"
                    objectFit="cover"
                    layout="fill"
                />
            </motion.div>
            <div
                className="absolute flex justify-center items-center rounded-full opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-slate-400
                w-[60px] h-[60px] 2xl:w-32 2xl:h-32"
            >
                <p className="text-xl lg:text-2xl font-semibold text-black opacity-100">
                    {`${skill.progress}%`}
                </p>
            </div>
        </div>
    );
}
