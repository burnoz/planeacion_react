import { useState, useEffect, useRef } from 'react'
import './App.css'

// Custom Hook: useFocus
function useFocus() {
  const inputRef = useRef(null)
  
  const setFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  
  return [inputRef, setFocus]
}

function App() {
  // useState para manejar los valores del formulario
  const [formData, setFormData] = useState({
    matricula: '',
    nombre: '',
    apellidos: '',
    edad: '',
    universidad: '',
    carrera: ''
  })

  // useState para almacenar los datos enviados
  const [datosEnviados, setDatosEnviados] = useState(null)

  // useFocus para enfocar automáticamente el primer campo
  const [matriculaRef, setMatriculaFocus] = useFocus()

  // useEffect para enfocar el campo de matrícula al cargar el componente
  useEffect(() => {
    setMatriculaFocus()
  }, [])

  // useEffect para mostrar en consola cuando se envían datos
  useEffect(() => {
    if (datosEnviados) {
      console.log('Datos enviados:', datosEnviados)
    }
  }, [datosEnviados])

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    setDatosEnviados(formData)
  }

  return (
    <div className="App">
      <h1>Formulario de Registro</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="matricula">Matrícula:</label>
          <input
            ref={matriculaRef}
            type="text"
            id="matricula"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="edad">Edad:</label>
          <input
            type="text"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="universidad">Universidad:</label>
          <input
            type="text"
            id="universidad"
            name="universidad"
            value={formData.universidad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="carrera">Carrera:</label>
          <input
            type="text"
            id="carrera"
            name="carrera"
            value={formData.carrera}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">Enviar</button>
      </form>

      {datosEnviados && (
        <div className="resultado">
          <h2>Datos Registrados:</h2>
          <p><strong>Matrícula:</strong> {datosEnviados.matricula}</p>
          <p><strong>Nombre:</strong> {datosEnviados.nombre}</p>
          <p><strong>Apellidos:</strong> {datosEnviados.apellidos}</p>
          <p><strong>Edad:</strong> {datosEnviados.edad}</p>
          <p><strong>Universidad:</strong> {datosEnviados.universidad}</p>
          <p><strong>Carrera:</strong> {datosEnviados.carrera}</p>
        </div>
      )}
    </div>
  )
}

export default App
