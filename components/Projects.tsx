import Image from 'next/image';
import React from 'react';
import heroImgSrc from '../about-img.png';
import { motion } from 'framer-motion';
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Link from 'next/link';

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
    return (
        <div
            className="h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-full px-10 overflow-hidden
justify-evenly items-center mx-auto"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div
                className="relative w-full flex overflow-x-scroll snap-x snap-mandatory z-20
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
            >
                {projects.map(
                    ({
                        _id,
                        image,
                        linkToBuild,
                        summary,
                        technologies,
                        title,
                    }) => (
                        <Link
                            href={linkToBuild}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={_id}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                key={_id}
                                className="snap-center w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 p-20 md:p-44 h-screen mt-0 md:mt-20"
                            >
                                <motion.div
                                    initial={{ y: -150 }}
                                    transition={{ duration: 1 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative overflow-hidden rounded-full w-24 h-24 md:w-56 md:h-56"
                                >
                                    <Image
                                        src={urlFor(image).url()}
                                        alt="Picture of the author"
                                        objectFit="cover"
                                        layout="fill"
                                    />
                                </motion.div>
                                <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
                                    <h4 className="text-2xl md:text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50">
                                        {title}
                                    </h4>
                                    <p className="text-sm md:text-lg text-center">
                                        {summary}
                                    </p>
                                    <div className="flex space-x-1 my-2">
                                        {technologies.map((technology) => (
                                            <div
                                                className="relative overflow-hidden h-8 w-8 rounded-full"
                                                key={technology._id}
                                            >
                                                <Image
                                                    alt="skill image"
                                                    src={urlFor(
                                                        technology.image
                                                    ).url()}
                                                    layout="fill"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    )
                )}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </div>
    );
}
