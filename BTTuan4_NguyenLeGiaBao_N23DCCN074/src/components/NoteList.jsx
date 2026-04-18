import React from 'react'

export default function NoteList({ notes, onDelete }){
  if(!notes || notes.length === 0) return <div className="card">Chưa có ghi chú nào.</div>

  return (
    <div className="note-list">
      {notes.map(n => (
        <div className="note-item card" key={n.id}>
          <div style={{flex:1}}>
            <div className="note-content">{n.text}</div>
            <div className="note-meta">{new Date(n.createdAt).toLocaleString()}</div>
          </div>
          <div className="note-actions">
            <button onClick={() => onDelete(n.id)}>Xóa</button>
          </div>
        </div>
      ))}
    </div>
  )
}
