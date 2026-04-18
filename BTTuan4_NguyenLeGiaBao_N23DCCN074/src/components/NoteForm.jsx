import React, { useState } from 'react'

export default function NoteForm({ onAdd }){
  const [text, setText] = useState('') // controlled input state

  const handleSubmit = (e) =>{
    e.preventDefault() // ngăn reload trang
    const trimmed = text.trim()

    if(!trimmed) return
    onAdd(trimmed)
    setText('') // xóa trống ô input sau khi thêm
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <textarea placeholder="Viết ghi chú ở đây..." value={text} onChange={e=>setText(e.target.value)} />
      <div>
        <button type="submit">Thêm</button>
      </div>
    </form>
  )
}
