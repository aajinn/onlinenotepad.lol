'use client';

import { memo } from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div className="flex flex-col items-center">
            <main className="container mx-auto px-4 py-10">
                <section className="text-center">
                    <h2 className="text-5xl md:text-9xl font-extrabold text-white mb-6">
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
                            {' '}
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
                        <span className="text-yellow-500 ml-10">
                            writing.
                        </span>
                    </h2>
                </section>
            </main>
        </div>
    );
};

export default memo(Home);
