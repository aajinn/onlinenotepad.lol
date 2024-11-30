export default function Footer() {
    return (
        <footer className="w-full  text-center py-4 mt-10">
            <p className="text-gray-600 text-sm">
                &copy;{' '}
                {new Date().getFullYear()}{' '}
                onlinenotepad.lol All
                rights reserved.
            </p>
        </footer>
    );
}
