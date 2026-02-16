import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HolaMundo } from './HolaMundo.tsx'
import { Variables } from './Variables.tsx'
import { Bancos } from './Bancos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HolaMundo />
    <Variables />
    <Bancos />
  </StrictMode>,
)
