import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  // Estado inicial con algunos usuarios de ejemplo
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', edad: 28, ciudad: 'Madrid' },
    { id: 2, nombre: 'María García', email: 'maria@example.com', edad: 32, ciudad: 'Barcelona' },
    { id: 3, nombre: 'Carlos López', email: 'carlos@example.com', edad: 25, ciudad: 'Valencia' }
  ])

  // Estado para el formulario
  const [formulario, setFormulario] = useState({
    id: null,
    nombre: '',
    email: '',
    edad: '',
    ciudad: ''
  })

  // Estado para saber si estamos editando
  const [editando, setEditando] = useState(false)

  // Manejar cambios en los inputs del formulario
  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  // Agregar un nuevo usuario
  const agregarUsuario = (e) => {
    e.preventDefault()
    
    if (!formulario.nombre || !formulario.email || !formulario.edad || !formulario.ciudad) {
      alert('Por favor completa todos los campos')
      return
    }

    const nuevoUsuario = {
      id: Date.now(),
      nombre: formulario.nombre,
      email: formulario.email,
      edad: parseInt(formulario.edad),
      ciudad: formulario.ciudad
    }

    setUsuarios([...usuarios, nuevoUsuario])
    limpiarFormulario()
  }

  // Editar usuario existente
  const actualizarUsuario = (e) => {
    e.preventDefault()

    if (!formulario.nombre || !formulario.email || !formulario.edad || !formulario.ciudad) {
      alert('Por favor completa todos los campos')
      return
    }

    setUsuarios(usuarios.map(usuario => 
      usuario.id === formulario.id 
        ? { ...formulario, edad: parseInt(formulario.edad) }
        : usuario
    ))

    limpiarFormulario()
    setEditando(false)
  }

  // Preparar formulario para editar
  const editarUsuario = (usuario) => {
    setFormulario(usuario)
    setEditando(true)
  }

  // Eliminar usuario
  const eliminarUsuario = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      setUsuarios(usuarios.filter(usuario => usuario.id !== id))
    }
  }

  // Limpiar formulario
  const limpiarFormulario = () => {
    setFormulario({
      id: null,
      nombre: '',
      email: '',
      edad: '',
      ciudad: ''
    })
    setEditando(false)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">CRUD de Usuarios</h1>
      
      {/* Formulario */}
      <div className="card mb-4">
        <div className="card-header">
          <h3>{editando ? 'Editar Usuario' : 'Agregar Nuevo Usuario'}</h3>
        </div>
        <div className="card-body">
          <form onSubmit={editando ? actualizarUsuario : agregarUsuario}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Ingrese el nombre"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="Ingrese el email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input
                  type="number"
                  className="form-control"
                  id="edad"
                  name="edad"
                  value={formulario.edad}
                  onChange={manejarCambio}
                  placeholder="Ingrese la edad"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="ciudad" className="form-label">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="ciudad"
                  name="ciudad"
                  value={formulario.ciudad}
                  onChange={manejarCambio}
                  placeholder="Ingrese la ciudad"
                />
              </div>
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                {editando ? 'Actualizar' : 'Agregar'}
              </button>
              {editando && (
                <button type="button" className="btn btn-secondary" onClick={limpiarFormulario}>
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Tabla de usuarios */}
      <div className="card">
        <div className="card-header">
          <h3>Lista de Usuarios ({usuarios.length})</h3>
        </div>
        <div className="card-body">
          {usuarios.length === 0 ? (
            <p className="text-center text-muted">No hay usuarios registrados</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Edad</th>
                    <th>Ciudad</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                      <td>{usuario.id}</td>
                      <td>{usuario.nombre}</td>
                      <td>{usuario.email}</td>
                      <td>{usuario.edad}</td>
                      <td>{usuario.ciudad}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => editarUsuario(usuario)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => eliminarUsuario(usuario.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
