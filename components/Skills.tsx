import { Skill } from '@/typings';
import React from 'react';
import SkillComponent from './SkillComponent';

type Props = { skills: Skill[] };

export default function Skills({ skills }: Props) {
    return (
        <div
            className="h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-full px-10 overflow-hidden
justify-evenly items-center mx-auto"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Skills
            </h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over a skill to see proficiency
            </h3>
            <div className="absolute top-56 grid grid-cols-4 gap-4">
                {skills.map((ele, id) => (
                    <div key={ele._id}>
                        <SkillComponent skill={ele} directionLeft={!(id % 2)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
