'use client';

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <header className="w-full  text-white py-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <h1 className="text-2xl font-bold">
                        NoteApp
                    </h1>
                    <nav>
                        <a
                            href="#about"
                            className="text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                            About
                        </a>
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-6 py-10">
                <section className="text-center">
                    <h2 className="text-9xl font-extrabold text-white mb-6">
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
                            Login
                        </span>
                        <span>
                            {' '}
                            , just{' '}
                            <span
                                className="transition-all hover:text-8xl text-red-500"
                                role="button"
                                onClick={() =>
                                    (location.href =
                                        '/notepad')
                                }>
                                {' '}
                                start
                            </span>
                        </span>
                        <span className="text-yellow-500 ml-10">
                            writing.
                        </span>
                    </h2>
                </section>
            </main>
        </div>
    );
}
