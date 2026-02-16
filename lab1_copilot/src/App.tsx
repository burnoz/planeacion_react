import './App.css'
import HolaMundo from './components/HolaMundo'
import ComponenteVariables from './components/ComponenteVariables'
import ComponenteBancos from './components/ComponenteBancos'

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Lab 1: Componentes Funcionales en React</h1>
      
      <div style={{ marginBottom: '40px', padding: '20px', border: '2px solid #646cff', borderRadius: '8px' }}>
        <HolaMundo />
      </div>

      <div style={{ marginBottom: '40px', padding: '20px', border: '2px solid #646cff', borderRadius: '8px' }}>
        <ComponenteVariables />
      </div>

      <div style={{ marginBottom: '40px', padding: '20px', border: '2px solid #646cff', borderRadius: '8px' }}>
        <ComponenteBancos />
      </div>
    </div>
  )
}

export default App
