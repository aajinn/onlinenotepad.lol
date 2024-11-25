'use server';

import { v4 as uuidv4 } from 'uuid';
import { revalidatePath } from 'next/cache';
import { Note } from '../types';

let notes: Note[] = [];

export async function createNote(formData: FormData) {
  const content = formData.get('content') as string;
  
  if (!content || content.trim() === '') {
    return { error: 'Content is required' };
  }

  const newNote = {
    id: uuidv4(),
    content,
    createdAt: new Date()
  };

  notes.push(newNote);
  revalidatePath('/');
  return { success: true, note: newNote };
}

export async function deleteNote(id: string) {
  notes = notes.filter(note => note.id !== id);
  revalidatePath('/');
  return { success: true };
}

export async function getNotes() {
  return notes;
}