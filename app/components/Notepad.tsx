'use client';
import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import localFont from 'next/font/local';
import Link from 'next/link';

const scriptinaRegular =
  localFont({
    src: '../fonts/scriptina.regular.ttf',
    variable:
      '--font-scriptina-regular',
  });

export default function Notepad() {
  const [
    notes,
    setNotes,
  ] = useState([]); // Use a more descriptive name for files
  const [
    currentNoteId,
    setCurrentNoteId,
  ] =
    useState(null);
  const [
    fontSize,
    setFontSize,
  ] = useState(16);
  const textareaRef =
    useRef(null);
  const lineNumbersRef =
    useRef(null);

  // Load notes and text size from localStorage
  useEffect(() => {
    const savedNotes =
      JSON.parse(
        localStorage.getItem(
          'notepadNotes',
        ),
      );
    const savedTextSize =
      parseInt(
        localStorage.getItem(
          'textSize',
        ),
        10,
      );

    setNotes(
      savedNotes ||
        [],
    );
    setFontSize(
      savedTextSize ||
        16,
    );
  }, []);

  // Save notes and text size to localStorage on change
  useEffect(() => {
    localStorage.setItem(
      'notepadNotes',
      JSON.stringify(
        notes,
      ),
    );
  }, [notes]);

  useEffect(() => {
    localStorage.setItem(
      'textSize',
      fontSize.toString(),
    );
  }, [fontSize]);

  const createNewNote =
    () => {
      const newNote =
        {
          id: Date.now().toString(),
          name: `Untitled ${
            notes.length +
            1
          }`,
          content:
            '',
          lastSaved:
            new Date().toLocaleString(),
        };
      setNotes([
        ...notes,
        newNote,
      ]);
      setCurrentNoteId(
        newNote.id,
      );
    };

  const updateCurrentNoteContent =
    (
      newContent,
    ) => {
      setNotes(
        (
          prevNotes,
        ) =>
          prevNotes.map(
            (
              note,
            ) =>
              note.id ===
              currentNoteId
                ? {
                    ...note,
                    content:
                      newContent,
                    lastSaved:
                      new Date().toLocaleString(),
                  }
                : note,
          ),
      );
    };

  const updateCurrentNoteName =
    (newName) => {
      setNotes(
        (
          prevNotes,
        ) =>
          prevNotes.map(
            (
              note,
            ) =>
              note.id ===
              currentNoteId
                ? {
                    ...note,
                    name: newName,
                  }
                : note,
          ),
      );
    };

  const deleteCurrentNote =
    () => {
      if (
        !currentNoteId
      )
        return;
      const updatedNotes =
        notes.filter(
          (note) =>
            note.id !==
            currentNoteId,
        );
      setNotes(
        updatedNotes,
      );
      setCurrentNoteId(
        updatedNotes.length >
          0
          ? updatedNotes[0]
              .id
          : null,
      );
    };

  const currentNote =
    notes.find(
      (note) =>
        note.id ===
        currentNoteId,
    );

  const getLineNumbers =
    (content) => {
      return content
        .split('\n')
        .map(
          (
            _,
            index,
          ) =>
            index +
            1,
        );
    };

  const syncScroll =
    () => {
      if (
        textareaRef.current &&
        lineNumbersRef.current
      ) {
        lineNumbersRef.current.scrollTop =
          textareaRef.current.scrollTop;
      }
    };

  return (
    <div className="w-full p-4 max-w-full">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Online
        Notepad{' '}
        <span
          className={`${scriptinaRegular.className} text-red-500`}>
          it's
        </span>
        <Link
          href="/"
          prefetch={
            true
          }
          onMouseOver={(
            event,
          ) =>
            (event.currentTarget.innerText =
              'onlinenotepad.lol')
          }
          onMouseLeave={(
            event,
          ) =>
            (event.currentTarget.innerText =
              '.lol')
          }>
          <span className="text-green-500 cursor-pointer transition-all ml-1">
            .lol
          </span>
        </Link>
      </h1>

      {/* File Management */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg shadow-lg ">
        <button
          onClick={
            createNewNote
          }
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-shadow duration-300 mb-2 md:mb-0">
          New Note
        </button>
        {currentNote && (
          <div className="flex-1 mx-4">
            <input
              type="text"
              value={
                currentNote.name
              }
              onChange={(
                e,
              ) =>
                updateCurrentNoteName(
                  e
                    .target
                    .value,
                )
              }
              maxLength={
                30
              }
              className="w-full px-4 py-2 rounded-lg text-lg font-bold text-white bg-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter note name"
            />
          </div>
        )}
        <div className="relative flex items-center mb-2 md:mb-0">
          <span className="text-white mr-2">
            Notes:
          </span>
          <select
            value={
              currentNoteId ||
              ''
            }
            onChange={(
              e,
            ) =>
              setCurrentNoteId(
                e
                  .target
                  .value,
              )
            }
            className="w-32 border border-gray-300 rounded-lg text-black h-full px-4 py-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            {notes.map(
              (
                note,
              ) => (
                <option
                  key={
                    note.id
                  }
                  value={
                    note.id
                  }>
                  {
                    note.name
                  }
                </option>
              ),
            )}
          </select>
        </div>
        <button
          onClick={
            deleteCurrentNote
          }
          disabled={
            !currentNote
          }
          className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all">
          Delete
          Note
        </button>
      </div>

      {/* Text Area with Line Numbers */}
      <div className="flex flex-col md:flex-row border rounded-lg shadow-sm h-[500px]">
        {/* Line numbers column */}
        <div
          ref={
            lineNumbersRef
          }
          className="flex flex-col bg-gray-200 p-3 overflow-y-auto"
          style={{
            width:
              '42px',
            height:
              '100%',
            scrollbarWidth:
              'none',
            msOverflowStyle:
              'none',
            scrollBehavior:
              'smooth',
          }}
          onScroll={
            syncScroll
          }>
          {currentNote &&
            getLineNumbers(
              currentNote.content,
            ).map(
              (
                lineNumber,
              ) => (
                <span
                  key={
                    lineNumber
                  }
                  className="text-gray-600 block text-center">
                  {
                    lineNumber
                  }
                </span>
              ),
            )}
        </div>

        {/* Textarea area */}
        <textarea
          ref={
            textareaRef
          }
          value={
            currentNote?.content ||
            ''
          }
          onChange={(
            e,
          ) =>
            updateCurrentNoteContent(
              e
                .target
                .value,
            )
          }
          onScroll={
            syncScroll
          }
          style={{
            fontSize:
              fontSize,
            scrollBehavior:
              'smooth',
          }}
          className="bg-yellow-50 w-full flex-1 p-3 border resize-none text-black overflow-y-auto"
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
          value={
            fontSize
          }
          onChange={(
            e,
          ) =>
            setFontSize(
              parseInt(
                e
                  .target
                  .value,
                10,
              ),
            )
          }
          className="w-full"
        />
        <span className="ml-4 text-sm text-gray-700">
          {fontSize}
          px
        </span>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        Last saved:{' '}
        {currentNote?.lastSaved ||
          'Never'}
      </div>
    </div>
  );
}
