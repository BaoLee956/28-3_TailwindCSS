import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'

export default function App(){
  const [notes, setNotes] = useState([])

  // Khi mount, đọc dữ liệu từ localStorage nếu có
  useEffect(()=>{
    try{
      const raw = localStorage.getItem('notes_v1')
      if(raw) setNotes(JSON.parse(raw))
    }catch(err){
      console.error('Failed to parse notes from localStorage', err)
    }
  }, [])

  // Mỗi khi notes thay đổi -> lưu vào localStorage
  useEffect(()=>{
    try{
      localStorage.setItem('notes_v1', JSON.stringify(notes))
    }catch(err){
      console.error('Failed to save notes', err)
    }
  }, [notes])

  const addNote = (text) =>{
    const newNote = { id: Date.now().toString(), text, createdAt: Date.now() }
    setNotes(prev => [newNote, ...prev])
  }

  const deleteNote = (id) =>{
    setNotes(prev => prev.filter(n => n.id !== id))
  }

  return (
    <ThemeProvider>
      <div className="container">
        <Header total={notes.length} />

        <div style={{height:12}} />

        <div className="card">
          <NoteForm onAdd={addNote} />
          <NoteList notes={notes} onDelete={deleteNote} />
        </div>
      </div>
    </ThemeProvider>
  )
}
