import React from 'react';
import Note from './note';
import AddNote from './addnote';
export default function NotesList({notes,handleAddNote,handleDeleteNote}) {
  return (
    <div className='notes-list'>
      {notes.map((note)=>(
        <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
      ))}
      <AddNote handleAddNote={handleAddNote}/>
    </div>
  )
}
