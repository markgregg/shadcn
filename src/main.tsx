import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'

const root = document.getElementById('root')

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <div style={{ padding: '2rem' }}>
        <h1>Signal Component Library</h1>
        <p>
          Run <code>npm run dev</code> to start Ladle and view components
        </p>
      </div>
    </React.StrictMode>
  )
}
