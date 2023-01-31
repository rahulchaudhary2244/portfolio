import React from 'react';
import Image from 'next/image';
import heroImgSrc from '../hero-img3.png';
import { motion } from 'framer-motion';
import { Experience } from '@/typings';
import { urlFor } from '@/sanity';

type Props = { experience: Experience };

const getFormattedDate = (date: string) => {
    let d = new Date(date);
    return d.toLocaleString('en-IN', {
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'short', // numeric, 2-digit, long, short, narrow
    });
};

export default function ExperienceCard({
    experience: {
        companyImage,
        company,
        points,
        isCurrentlyWorkingHere,
        dateStarted,
        dateEnded,
        jobTitle,
        technologies,
    },
}: Props) {
    return (
        <article
            className="flex flex-col rounded-lg space-y-2 items-center flex-shrink-0 w-[310px] md:w-[450px] xl:w-[550px] bg-[#292929] p-5 
         hover:brightness-110 cursor-pointer transition-opacity duration-200 overflow-hidden snap-center"
        >
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-full h-28 w-28 xl:w-[9rem] xl:h-[9rem] mx-auto"
            >
                <Image
                    src={urlFor(companyImage).url()}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="px-0 md:px-3 text-left"
            >
                <h4 className="font-light text-2xl md:text-3xl">
                    System Engineer
                </h4>
                <p className="font-bold text-xl mt-1">{jobTitle}</p>
                <div className="flex space-x-1 my-2">
                    {technologies.map((technology) => (
                        <div
                            className="relative overflow-hidden h-9 w-9 rounded-full bg-white"
                            key={technology._id}
                        >
                            <Image
                                layout="fill"
                                objectFit="cover"
                                alt="skill image"
                                src={urlFor(technology.image).url()}
                            />
                        </div>
                    ))}
                </div>
                <p className="uppercase py-3 text-gray-300">
                    {`${getFormattedDate(dateStarted)} - 
                    ${
                        isCurrentlyWorkingHere
                            ? 'Present'
                            : getFormattedDate(dateEnded)
                    }`}
                </p>
                <ul className="list-disc space-y-3 text-sm md:text-lg ml-5 break-words">
                    {points.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                    <li>
                        Implemented premium subscription feature to hide
                        components directly from database and helps avoiding
                        deployments
                    </li>
                    <li>
                        Made Training Resource dashboard where instructor can
                        upload learning resources for user
                    </li>
                </ul>
            </motion.div>
        </article>
    );
}
