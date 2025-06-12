import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'
import App from './App.tsx'
import VideoTimeContextProvider from './context/VideoTimeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VideoTimeContextProvider>
      <App />
    </VideoTimeContextProvider>

  </StrictMode>,
)
