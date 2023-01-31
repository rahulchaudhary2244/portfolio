import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo: { role, name, heroImage } }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, I'm ${name}`,
            `Guy-who-loves-cooking`,
            `<But-Loves-To-Code-More />`,
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col justify-center items-center space-y-8 text-center overflow-hidden">
            <BackgroundCircles />

            <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto">
                <Image
                    src={urlFor(heroImage).url()}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="z-20">
                <h2 className="uppercase text-sm text-gray-500 tracking-[15px] font-semibold pb-5">
                    {role}
                </h2>
                <h1 className="text-5xl lg:text-6xl text-gray-300 font-semibold break-words px-10">
                    <span>{text}</span>
                    <Cursor cursorStyle="|" cursorColor="orange" />
                </h1>

                <div className="mt-20">
                    <Link href="#about">
                        <button type="button" className="heroButton">
                            About
                        </button>
                    </Link>
                    <Link href="#experience">
                        <button type="button" className="heroButton">
                            Experience
                        </button>
                    </Link>
                    <Link href="#skills">
                        <button type="button" className="heroButton">
                            Skills
                        </button>
                    </Link>
                    <Link href="#projects">
                        <button type="button" className="heroButton">
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
