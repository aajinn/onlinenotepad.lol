'use client';

import React, { useState, useEffect, useRef } from 'react';

const THEMES = {
    light: {
        name: 'Light',
        bg: '#f5f6fa',
        text: '#22223b',
        line: '#bfc4ce',
    },
    dark: {
        name: 'Dark',
        bg: '#181a1b',
        text: '#f5f6fa',
        line: '#444857',
    },
    sepia: {
        name: 'Sepia',
        bg: '#f4ecd8',
        text: '#5b4636',
        line: '#bfae99',
    },
};

export default function Notepad() {
    const [content, setContent] = useState('');
    const [textSize, setTextSize] = useState(28);
    const [lastSaved, setLastSaved] = useState('Never');
    const [theme, setTheme] = useState<keyof typeof THEMES>('light');
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    // Show notification
    const showNotification = (message: string, type: 'success' | 'error') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 2500);
    };

    // Load from localStorage
    useEffect(() => {
        const savedContent = localStorage.getItem('notepadContent');
        const savedTextSize = localStorage.getItem('textSize');
        const savedLastSaved = localStorage.getItem('lastSaved');
        const savedTheme = localStorage.getItem('notepadTheme');
        if (savedContent) setContent(savedContent);
        if (savedTextSize) setTextSize(parseInt(savedTextSize, 10));
        if (savedLastSaved) setLastSaved(savedLastSaved);
        if (savedTheme && (savedTheme in THEMES)) setTheme(savedTheme as keyof typeof THEMES);
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('notepadContent', content);
        const now = new Date().toLocaleString();
        setLastSaved(now);
        localStorage.setItem('lastSaved', now);
    }, [content]);

    useEffect(() => {
        localStorage.setItem('textSize', textSize.toString());
    }, [textSize]);

    useEffect(() => {
        localStorage.setItem('notepadTheme', theme);
    }, [theme]);

    // Line numbers
    const getLineNumbers = (content: string) => {
        const lines = content.split('\n');
        return lines.map((_, index) => index + 1);
    };

    // Download notes as .txt
    const handleDownload = () => {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'notes.txt';
        a.click();
        URL.revokeObjectURL(url);
    };

    // Copy to clipboard
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(content);
            showNotification('Copied to clipboard!', 'success');
        } catch {
            showNotification('Failed to copy.', 'error');
        }
    };

    // Clear notes
    const handleClear = () => {
        setContent('');
        showNotification('Notes cleared.', 'success');
    };

    const themeObj = THEMES[theme];

    return (
        <div className="w-full mx-auto p-4 relative">
            {/* Notification UI */}
            {notification && (
                <div
                    className={`fixed left-1/2 top-6 z-50 transform -translate-x-1/2 px-6 py-3 rounded shadow-lg text-white text-base font-semibold transition-all duration-300
                        ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
                    style={{ minWidth: '200px', maxWidth: '90vw', textAlign: 'center' }}
                >
                    {notification.message}
                </div>
            )}
            {/* Header */}
            <h1 className="text-3xl font-bold text-center mb-4" style={{ color: themeObj.text }}>Online Notepad</h1>
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
                <button
                    onClick={handleDownload}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition"
                >
                    Download
                </button>
                <button
                    onClick={handleCopy}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition"
                >
                    Copy
                </button>
                <button
                    onClick={handleClear}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
                >
                    Clear
                </button>
                {/* Font size dropdown */}
                <label htmlFor="font-size-select" className="ml-4 mr-2 text-base font-semibold" style={{ color: themeObj.text }}>Font Size:</label>
                <select
                    id="font-size-select"
                    value={textSize}
                    onChange={e => setTextSize(parseInt(e.target.value, 10))}
                    className="border border-gray-700 rounded px-2 py-1 text-base bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {[12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 56, 64].map(size => (
                        <option key={size} value={size}>{size}px</option>
                    ))}
                </select>
                {/* Theme switcher */}
                <label htmlFor="theme-select" className="ml-4 mr-2 text-base font-semibold" style={{ color: themeObj.text }}>Theme:</label>
                <select
                    id="theme-select"
                    value={theme}
                    onChange={e => setTheme(e.target.value as keyof typeof THEMES)}
                    className="border border-gray-700 rounded px-2 py-1 text-base bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {Object.entries(THEMES).map(([key, t]) => (
                        <option key={key} value={key}>{t.name}</option>
                    ))}
                </select>
            </div>
            {/* Notepad area */}
            <div
                className="flex border rounded-lg shadow-sm w-full"
                style={{ background: themeObj.bg }}
            >
                {/* Line numbers */}
                <div
                    className="flex flex-col py-3 px-2 select-none items-end"
                    style={{ width: '36px', minHeight: '300px', background: themeObj.bg }}
                >
                    {getLineNumbers(content).map((lineNumber) => (
                        <span
                            key={lineNumber}
                            className="text-xs text-right"
                            style={{
                                height: '1.5em',
                                lineHeight: '1.5em',
                                fontSize: textSize,
                                fontFamily: 'inherit',
                                display: 'block',
                                color: themeObj.line,
                            }}
                        >
                            {lineNumber}
                        </span>
                    ))}
                </div>
                {/* Textarea */}
                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    style={{
                        fontSize: textSize,
                        minHeight: '300px',
                        height: 'auto',
                        lineHeight: '1.5em',
                        fontFamily: 'inherit',
                        resize: 'none',
                        overflow: 'hidden',
                        background: themeObj.bg,
                        color: themeObj.text,
                    }}
                    className="w-full flex-1 p-3 border-0 focus:outline-none"
                    placeholder="Start typing your notes here..."
                    rows={Math.max(15, content.split('\n').length)}
                />
            </div>
            <div className="mt-2 text-xs text-right" style={{ color: themeObj.line }}>Last saved: {lastSaved}</div>
        </div>
    );
}
