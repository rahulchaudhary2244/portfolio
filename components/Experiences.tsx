import { Experience } from '@/typings';
import React from 'react';
import ExperienceCard from './ExperienceCard';

type Props = { experiences: Experience[] };

export default function Experiences({ experiences }: Props) {
    return (
        <div
            className="h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-full px-10 
            overflow-hidden justify-evenly items-center mx-auto"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Experience
            </h3>
            <div
                className="absolute top-40 md:top-50 w-full lg:w-3/4 mx-auto flex space-x-5
             overflow-x-scroll snap-x snap-mandatory
             scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
            >
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience._id}
                        experience={experience}
                    />
                ))}
            </div>
        </div>
    );
}
