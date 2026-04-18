import React from 'react'
import { useTheme } from '../context/ThemeContext'

export default function Header({ total }){
  const { isDarkMode, toggle } = useTheme() // Dùng custom hook để lấy theme

  return (
    <div className="card header">
      <div>
        <div className="title">Ghi Chú Cá Nhân</div>
        <div className="meta">Tổng: {total} ghi chú</div>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <button className="theme-btn" onClick={toggle}>{isDarkMode ? 'Light' : 'Dark'}</button>
      </div>
    </div>
  )
}
