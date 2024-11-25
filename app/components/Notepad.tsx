'use client';

import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import localFont from 'next/font/local';

const scriptinaRegular = localFont({
    src: '../fonts/scriptina.regular.ttf',
    variable:
        '--font-scriptina-regular',
});

export default function Notepad() {
    const [content, setContent] =
        useState('');
    const [lines, setLines] = useState<
        string[]
    >([]);
    const [lastSaved, setLastSaved] =
        useState<string | null>(null);
    const [textSize, setTextSize] =
        useState(16); // Default text size

    // Refs for textarea and line numbers
    const textareaRef =
        useRef<HTMLTextAreaElement>(
            null,
        );
    const linesRef =
        useRef<HTMLDivElement>(null);

    // Load content and last saved time from localStorage on mount
    useEffect(() => {
        const savedContent =
            localStorage.getItem(
                'notepadContent',
            );
        const savedTime =
            localStorage.getItem(
                'lastSavedTime',
            );
        const savedTextSize =
            localStorage.getItem(
                'textSize',
            );

        if (savedContent) {
            setContent(savedContent);
            setLines(
                savedContent.split(
                    '\n',
                ),
            );
        }

        if (savedTime) {
            setLastSaved(savedTime);
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

    // Save content and update last saved time whenever content changes
    useEffect(() => {
        localStorage.setItem(
            'notepadContent',
            content,
        );
        setLines(content.split('\n'));

        const now =
            new Date().toLocaleString();
        setLastSaved(now);
        localStorage.setItem(
            'lastSavedTime',
            now,
        );
    }, [content]);

    // Save text size when it changes
    useEffect(() => {
        localStorage.setItem(
            'textSize',
            textSize.toString(),
        );
    }, [textSize]);

    // Handle paste event to ensure line calculation works correctly
    const handlePaste = (
        event: React.ClipboardEvent<HTMLTextAreaElement>,
    ) => {
        const pastedData =
            event.clipboardData.getData(
                'text',
            );
        const updatedContent =
            content.slice(
                0,
                textareaRef.current
                    ?.selectionStart ||
                    0,
            ) +
            pastedData +
            content.slice(
                textareaRef.current
                    ?.selectionEnd ||
                    content.length,
            );

        setContent(updatedContent);
        setLines(
            updatedContent.split('\n'),
        );

        // Prevent default paste behavior
        event.preventDefault();
    };

    // Sync scroll positions
    const handleScroll = () => {
        if (
            textareaRef.current &&
            linesRef.current
        ) {
            linesRef.current.scrollTop =
                textareaRef.current.scrollTop;
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Online Notepad{' '}
                <span
                    className={`${scriptinaRegular.className} text-red-500`}>
                    it&apos;s
                </span>
                <span
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
                </span>
            </h1>
            <div className="flex border rounded-lg shadow-sm">
                {/* Line Numbers Sidebar */}
                <div
                    ref={linesRef}
                    className="bg-gray-200 text-gray-700 text-right pr-4 py-2 select-none overflow-hidden h-[500px]">
                    {lines.map(
                        (_, index) => (
                            <div
                                key={
                                    index
                                }
                                style={{
                                    fontSize:
                                        textSize,
                                }}>
                                {index +
                                    1}
                            </div>
                        ),
                    )}
                </div>

                {/* Textarea */}
                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={(e) =>
                        setContent(
                            e.target
                                .value,
                        )
                    }
                    onScroll={
                        handleScroll
                    }
                    onPaste={
                        handlePaste
                    }
                    style={{
                        fontSize:
                            textSize,
                    }}
                    className="flex-1 h-[500px] p-3 border-l resize-none text-black overflow-y-scroll"
                    placeholder="Start typing your notes here..."
                />
            </div>

            {/* Slider for Text Size */}
            <div className="mt-4 flex items-center">
                <label className="mr-1 text-sm  font-medium text-gray-700">
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
                {lastSaved
                    ? lastSaved
                    : 'Never'}
            </div>
        </div>
    );
}
