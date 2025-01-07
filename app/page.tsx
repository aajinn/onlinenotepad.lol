'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from './components/NavBar';
import Feature from './components/Feature';
import NoteList from './components/NoteList';

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <main className="container mx-auto px-4 py-10">
        <section className="w-full flex justify-center ">
          <NoteList />
          <Link
            prefetch={
              true
            }
            href={
              '/notepad'
            }></Link>
        </section>
        <section className="w-full flex flex-wrap justify-start items-center mt-2">
          <div className="flex flex-col md:flex-row md:w-1/2 lg:w-1/3 p-4">
            <Feature
              title="📂 Effortless File Management"
              description="Create, edit, and delete notes seamlessly with our user-friendly interface. Manage your files effortlessly, all stored securely in your browser."
            />
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2 lg:w-1/3 p-4">
            <Feature
              title="💾 Persistent Data Storage"
              description="Your notes are saved automatically in your browser's local storage. Continue exactly where you left off, even after closing the app."
            />
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2 lg:w-1/3 p-4">
            <Feature
              title="🔍 Customizable Text Size"
              description="Adjust the text size with an intuitive slider to suit your reading or writing preferences."
            />
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2 lg:w-1/3 p-4">
            <Feature
              title="🖋️ Dynamic Note-Taking"
              description="A distraction-free editor with an elegant interface, designed for focus and creativity."
            />
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2 lg:w-1/3 p-4">
            <Feature
              title="🔒 Zero Data Collection"
              description="Your privacy is our priority. All data stays local—no servers, no trackers."
            />
          </div>
          <div className="flex flex-col md:flex-row md:w-1/2 lg:w-1/3 p-4">
            <Feature
              title="📑 Multi-File Support"
              description="Switch between multiple files with ease. Each note is named and timestamped for better organization."
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default memo(
  Home,
);
