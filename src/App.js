import React, { useState } from 'react';
import NotesList from './comps/notesList';
import {nanoid} from 'nanoid';
import Search from './comps/search';
import Header from './comps/header';
import { useEffect } from 'react';
export default function App() {
  const [notes,setNotes] = useState([
    {
      id: nanoid(),
      text:"Sample Note",
      date:"1/01/0001"
    },
  ]);
  const [searchText,setSearchText] = useState('');
  const [darkMode,setDarkMode] = useState(false);
  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('noteit-app-data'))
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[])
  useEffect(() =>{
    localStorage.setItem('noteit-app-data',JSON.stringify(notes))
  },[notes])
  const addNote = (text) => {
    const date= new Date();
    const newNote = {
      id:nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
   const newNotes = notes.filter((note)=> note.id !== id)
   setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote={addNote}
      handleDeleteNote={deleteNote}/>
    </div>
    </div>
  )
}

