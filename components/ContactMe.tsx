import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = { pageInfo: PageInfo };

export default function ContactMe({ pageInfo }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:rahulchaudhary2244@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div
            className="h-screen relative flex flex-col md:flex-row text-center md:text-left max-w-7xl px-10 
justify-evenly items-center mx-auto"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact Me
            </h3>

            <div className="flex flex-col space-y-6 mt-20">
                <h4 className="text-3xl font-semibold text-center">
                    {`I've got just what you need `}
                    <span className="underline decoration-[#F7AB0A]/50">
                        {`Let's Talk`}
                    </span>
                    {`.`}
                </h4>

                <div className="flex flex-col space-y-5 justify-center items-center">
                    <motion.span
                        initial={{ x: -200, opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex space-x-6 items-center">
                            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-xl lg:text-2xl">
                                {pageInfo.phoneNumber}
                            </p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-xl lg:text-2xl">
                                {pageInfo.address}
                            </p>
                        </div>
                        <div className="flex space-x-4 items-center">
                            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-xl lg:text-2xl">
                                <Link
                                    href={`mailto:${pageInfo.email}?subject=Want to consult&body=Hi ${pageInfo.name},`}
                                >
                                    Email me
                                </Link>
                            </p>
                        </div>
                    </motion.span>

                    <motion.form
                        initial={{ x: 200, opacity: 0 }}
                        transition={{ duration: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col w-fit space-y-2 mx-auto"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex space-x-2">
                            <input
                                className="contactInput w-1/2"
                                type="text"
                                placeholder="Name"
                                {...register('name')}
                            />
                            <input
                                className="contactInput w-1/2"
                                type="email"
                                placeholder="Email"
                                {...register('email')}
                            />
                        </div>
                        <input
                            className="contactInput"
                            type="text"
                            placeholder="Subject"
                            {...register('subject')}
                        />
                        <textarea
                            className="contactInput min-h-[60px]"
                            placeholder="Message"
                            {...register('message')}
                        />
                        <button className="bg-[#F7AB0A]/70 py-2 px-6 rounded-md text-black font-bold text-lg hover:bg-[#F7AB0A]">
                            Submit
                        </button>
                    </motion.form>
                </div>
            </div>
        </div>
    );
}
