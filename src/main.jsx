import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import root from './routes/routes.jsx'
import GlobalState from './components/context/gloabalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalState>
        <RouterProvider router={root} />
    </GlobalState>
  </StrictMode>,
)
