import { Note } from '../types';

export default function NoteCard({
  note,
}: {
  note: Note;
}) {
  return (
    <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-lg font-semibold">
        {note.name}
      </h1>
      <p className="text-gray-700">
        {note.content}
      </p>
      <p className="text-sm text-gray-500">
        {note.lastSaved}
      </p>
    </div>
  );
}
