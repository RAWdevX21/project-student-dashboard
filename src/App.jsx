import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentBody from './Features/StudentBody/index.jsx'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" alt="Vite Logo Link">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" alt="React Logo Link">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Student Dashboard</h1>
      <StudentBody />
    </>
  )
}

export default App
