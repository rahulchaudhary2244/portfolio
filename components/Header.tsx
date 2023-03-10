import { Social } from '@/typings';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
    return (
        <header className="sticky top-0 p-0 md:p-5 flex flex-row justify-between items-start xl:items-center max-w-7xl mx-auto z-20 bg-zinc-900 md:bg-transparent">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row"
            >
                {socials.map(({ _id, url }) => (
                    <SocialIcon
                        key={_id}
                        url={url}
                        fgColor="gray"
                        bgColor="transparent"
                    />
                ))}
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <Link href="#contact">
                    <div className="uppercase hidden md:inline-flex text-sm  text-gray-400">
                        Get in touch
                    </div>
                </Link>
            </motion.div>
        </header>
    );
}
