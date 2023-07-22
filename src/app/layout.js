import './globals.css';

export const metadata = {
  title: 'LeParisien Front-end Test',
  description: 'Technical test for Front-end Interview',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
