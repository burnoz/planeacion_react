import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Bancos } from './bancos.tsx'
import './classes/strings.ts'
import './classes/arrays.ts'
import './classes/objetos.ts'
import './classes/funciones.ts'
import './classes/array.ts'
import './classes/import.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Bancos />
  </StrictMode>,
)
