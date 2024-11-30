'use client';

import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import localFont from 'next/font/local';
import Link from 'next/link';

const scriptinaRegular = localFont({
    src: '../fonts/scriptina.regular.ttf',
    variable:
        '--font-scriptina-regular',
});

export default function Notepad() {
    const [files, setFiles] = useState<
        {
            id: string;
            name: string;
            content: string;
            lastSaved: string;
        }[]
    >([]);
    const [
        currentFileId,
        setCurrentFileId,
    ] = useState<string | null>(null);
    const [textSize, setTextSize] =
        useState(16);

    const textareaRef =
        useRef<HTMLTextAreaElement>(
            null,
        );

    // Load files from localStorage on mount
    useEffect(() => {
        const savedFiles =
            localStorage.getItem(
                'notepadFiles',
            );
        const savedTextSize =
            localStorage.getItem(
                'textSize',
            );

        if (savedFiles) {
            const parsedFiles =
                JSON.parse(savedFiles);
            setFiles(parsedFiles);
            if (
                parsedFiles.length > 0
            ) {
                setCurrentFileId(
                    parsedFiles[0].id,
                );
            }
        }

        if (savedTextSize) {
            setTextSize(
                parseInt(
                    savedTextSize,
                    10,
                ),
            );
        }
    }, []);

    // Save files to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem(
            'notepadFiles',
            JSON.stringify(files),
        );
    }, [files]);

    // Save text size to localStorage when it changes
    useEffect(() => {
        localStorage.setItem(
            'textSize',
            textSize.toString(),
        );
    }, [textSize]);

    // Create a new file
    const createNewFile = () => {
        const newFile = {
            id: Date.now().toString(),
            name: `Untitled ${
                files.length + 1
            }`,
            content: '',
            lastSaved:
                new Date().toLocaleString(),
        };
        setFiles([...files, newFile]);
        setCurrentFileId(newFile.id);
    };

    // Update current file content
    const updateCurrentFileContent = (
        newContent: string,
    ) => {
        setFiles((prevFiles) =>
            prevFiles.map((file) =>
                file.id ===
                currentFileId
                    ? {
                          ...file,
                          content:
                              newContent,
                          lastSaved:
                              new Date().toLocaleString(),
                      }
                    : file,
            ),
        );
    };

    // Update current file name
    const updateCurrentFileName = (
        newName: string,
    ) => {
        setFiles((prevFiles) =>
            prevFiles.map((file) =>
                file.id ===
                currentFileId
                    ? {
                          ...file,
                          name: newName,
                      }
                    : file,
            ),
        );
    };

    // Get the current file
    const currentFile = files.find(
        (file) =>
            file.id === currentFileId,
    );

    return (
        <div className="container mx-auto p-4 max-w-full md:max-w-2xl">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Online Notepad{' '}
                <span
                    className={`${scriptinaRegular.className} text-red-500`}>
                    it&apos;s
                </span>
                <Link
                    prefetch={true}
                    href={'/'}
                    onMouseOver={(
                        event,
                    ) => {
                        event.currentTarget.innerText =
                            'onlinenotepad.lol';
                    }}
                    onMouseLeave={(
                        event,
                    ) => {
                        event.currentTarget.innerText =
                            ' .lol';
                    }}
                    className="text-green-500 cursor-pointer transition-all ml-1">
                    &apos;.lol&apos;
                </Link>
            </h1>

            {/* File Management */}
            <div className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg">
                <button
                    onClick={
                        createNewFile
                    }
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-shadow duration-300">
                    New File
                </button>
                {currentFile && (
                    <div className=" flex-1 mx-4">
                        <input
                            type="text"
                            value={
                                currentFile.name
                            }
                            onChange={(
                                e,
                            ) =>
                                updateCurrentFileName(
                                    e
                                        .target
                                        .value,
                                )
                            }
                            className="w-full px-4 py-2 rounded-lg text-lg font-bold text-white bg-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter file name"
                        />
                    </div>
                )}
                <div className="relative flex items-center">
                    <span className="text-white mr-2">
                        Files:
                    </span>
                    <select
                        value={
                            currentFileId ||
                            ''
                        }
                        onChange={(e) =>
                            setCurrentFileId(
                                e.target
                                    .value,
                            )
                        }
                        className="border border-gray-300 rounded-lg text-black h-full px-4 py-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {files.map(
                            (file) => (
                                <option
                                    key={
                                        file.id
                                    }
                                    value={
                                        file.id
                                    }>
                                    {
                                        file.name
                                    }
                                </option>
                            ),
                        )}
                    </select>
                </div>
            </div>

            {/* Editable File Name */}

            {/* Text Area */}
            <div className="flex flex-col md:flex-row border rounded-lg shadow-sm">
                <textarea
                    ref={textareaRef}
                    value={
                        currentFile?.content ||
                        ''
                    }
                    onChange={(e) =>
                        updateCurrentFileContent(
                            e.target
                                .value,
                        )
                    }
                    style={{
                        fontSize:
                            textSize,
                    }}
                    className="flex-1 h-[300px] md:h-[500px] p-3 border resize-none text-black overflow-y-scroll"
                    placeholder="Start typing your notes here..."
                />
            </div>

            {/* Slider for Text Size */}
            <div className="mt-4 flex items-center">
                <label className="mr-1 text-sm font-medium text-gray-700">
                    TextSize:
                </label>
                <input
                    type="range"
                    min="10"
                    max="50"
                    value={textSize}
                    onChange={(e) =>
                        setTextSize(
                            parseInt(
                                e.target
                                    .value,
                                10,
                            ),
                        )
                    }
                    className="w-full"
                />
                <span className="ml-4 text-sm text-gray-700">
                    {textSize}px
                </span>
            </div>

            <div className="mt-2 text-sm text-gray-500">
                Last saved:{' '}
                {currentFile?.lastSaved ||
                    'Never'}
            </div>
        </div>
    );
}
