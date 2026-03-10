import { useState } from 'react'
import WorkflowList from './components/WorkflowsList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Administrador de Workflows</h1>
      </header>
      <main>
        <WorkflowList />
      </main>
      <footer>
        <p>CRUD de Workflows © 2026</p>
      </footer>
    </div>
  )
}

export default App