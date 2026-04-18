import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }){
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Khi isDarkMode thay đổi -> toggle class 'dark' trên thẻ root
  useEffect(() => {
    const root = document.documentElement
    if(isDarkMode) root.classList.add('dark')
    else root.classList.remove('dark')
  }, [isDarkMode])

  const toggle = () => setIsDarkMode(v => !v)

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook tiện lợi để dùng theme trong component
export function useTheme(){
  return useContext(ThemeContext)
}

export default ThemeContext
