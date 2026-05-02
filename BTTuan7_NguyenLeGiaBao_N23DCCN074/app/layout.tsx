import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Đăng ký thành viên',
  description: 'Form đăng ký dùng react-hook-form + zod + server actions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          {children}
        </main>
      </body>
    </html>
  )
}
