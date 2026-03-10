import { useState, useEffect } from 'react'
import './App.css'
import WorkflowForm from './components/WorkflowForm'
import WorkflowList from './components/WorkflowList'
import { workflowService } from './services/workflowService'

function App() {
  const [workflows, setWorkflows] = useState([])
  const [editingWorkflow, setEditingWorkflow] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Cargar workflows al montar el componente
  useEffect(() => {
    loadWorkflows()
  }, [])

  const loadWorkflows = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await workflowService.getAll()
      setWorkflows(data)
    } catch (err) {
      setError('Error al cargar los workflows. Asegúrate de que el servidor esté corriendo.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleCreate = async (workflowData) => {
    try {
      await workflowService.create(workflowData)
      loadWorkflows()
      setError(null)
    } catch (err) {
      setError('Error al crear el workflow')
      console.error(err)
    }
  }

  const handleUpdate = async (workflowData) => {
    if (!editingWorkflow) return
    try {
      await workflowService.update(editingWorkflow.id, workflowData)
      setEditingWorkflow(null)
      loadWorkflows()
      setError(null)
    } catch (err) {
      setError('Error al actualizar el workflow')
      console.error(err)
    }
  }

  const handleEdit = (workflow) => {
    setEditingWorkflow(workflow)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancelEdit = () => {
    setEditingWorkflow(null)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('¿Estás seguro de que deseas eliminar este workflow?')) {
      return
    }
    try {
      await workflowService.delete(id)
      loadWorkflows()
      setError(null)
    } catch (err) {
      setError('Error al eliminar el workflow')
      console.error(err)
    }
  }

  const handleSubmit = editingWorkflow ? handleUpdate : handleCreate

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🔄 Gestión de Workflows</h1>
        <p>Sistema CRUD completo para administrar workflows</p>
      </header>

      <main className="app-main">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <WorkflowForm
          workflow={editingWorkflow}
          onSubmit={handleSubmit}
          onCancel={handleCancelEdit}
        />

        {loading ? (
          <div className="loading">Cargando workflows...</div>
        ) : (
          <WorkflowList
            workflows={workflows}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>API: http://localhost:5000/api/workflows</p>
      </footer>
    </div>
  )
}

export default App
