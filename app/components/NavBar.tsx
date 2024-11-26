import localFont from 'next/font/local';
import Link from 'next/link';

const scriptinaRegular = localFont({
    src: '../fonts/scriptina.regular.ttf',
    variable:
        '--font-scriptina-regular',
});
export default function NavBar() {
    return (
        <div className="w-full flex justify-between">
            <header className="w-full  text-white py-6 shadow-md">
                <div className="container mx-auto flex justify-between items-center px-6">
                    <Link
                        prefetch={true}
                        href="./">
                        <h1
                            className={` text-2xl font-bold mr-0`}>
                            OnlineNotepad
                            <span
                                className={`${scriptinaRegular.className} text-2xl font-bold text-green-500 space-x-2 ml-0`}>
                                .lol
                            </span>
                        </h1>
                    </Link>
                </div>
            </header>
            <nav className="flex justify-end items-center w-full">
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
