import { Note } from '../types';
import NoteCard from './NoteCard';

export default function NoteList() {
  let display =
    true;
  const savedFiles =
    localStorage.getItem(
      'notepadFiles',
    );

  if (!savedFiles) {
    display = false;
  }
  const notes: Note[] =
    savedFiles
      ? JSON.parse(
          savedFiles,
        )
      : [];
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        My Notes
      </h2>
      <div className="space-y-4">
        {display &&
          notes.map(
            (
              note,
            ) => (
              <NoteCard
                key={
                  note.id
                }
                note={
                  note
                }
              />
            ),
          )}
      </div>
    </div>
  );
}
