import localFont from 'next/font/local';
import Link from 'next/link';

const scriptinaRegular = localFont({
    src: '../fonts/scriptina.regular.ttf',
    variable:
        '--font-scriptina-regular',
});
export default function NavBar() {
    return (
        <div className="w-full flex flex-col md:flex-row justify-between">
            <header className="w-full  text-white py-6 shadow-md">
                <div className="container flex md:justify-between sm:justify-center items-center px-6">
                    <Link
                        prefetch={true}
                        href="./">
                        <h1
                            className={` text-2xl font-bold text-center w-full`}>
                            OnlineNotepad
                            <span
                                className={`${scriptinaRegular.className} text-2xl font-bold text-green-500 space-x-2 ml-0`}>
                                .lol
                            </span>
                        </h1>
                    </Link>
                </div>
            </header>
            <nav className="flex flex-col md:flex-row justify-end items-center w-full">
                <Link
                    prefetch={true}
                    href="/about">
                    <span className="text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                        About
                    </span>
                </Link>
                <Link
                    prefetch={true}
                    href="/privacy-policy">
                    <span className="text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                        Privacy Policy
                    </span>
                </Link>
                <Link
                    prefetch={true}
                    href="/terms-conditions">
                    <span className="text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                        Terms and
                        Conditions
                    </span>
                </Link>
            </nav>
        </div>
    );
}
