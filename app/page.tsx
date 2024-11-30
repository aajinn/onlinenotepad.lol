'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from './components/NavBar';

const Home = () => {
    return (
        <div className="flex flex-col items-center">
            <NavBar />
            <main className="container mx-auto px-4 py-10">
                <section className="text-center">
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white mb-6">
                        <span className="text-green-500">
                            Simple
                        </span>
                        <span>
                            {' '}
                            Online
                            NotePad{' '}
                        </span>
                        <span className="text-red-500">
                            No
                        </span>
                        <span>
                            {' '}
                            Login
                        </span>
                        <span>
                            , just{' '}
                            <Link
                                prefetch={
                                    true
                                }
                                href={
                                    '/notepad'
                                }>
                                <span
                                    className="transition-all hover:text-8xl text-red-500"
                                    role="button">
                                    start
                                </span>
                            </Link>
                        </span>
                        <span className="text-yellow-500 ml-2 md:ml-4 lg:ml-10">
                            writing.
                        </span>
                    </h2>
                </section>

                <section className="w-full flex justify-center ">
                    <Link
                        prefetch={true}
                        href={
                            '/notepad'
                        }>
                        <Image
                            src="/screen.png"
                            alt="screenshot of onlinenotepad.lol"
                            width={400}
                            height={300}
                            className="rotate-2 transition-all hover:rotate-1 "
                        />
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default memo(Home);
