import { useState, useEffect } from 'react';
import './WorkflowForm.css';

function WorkflowForm({ workflow, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    rol_minimo_acceso: '',
  });

  useEffect(() => {
    if (workflow) {
      setFormData({
        nombre: workflow.nombre || '',
        descripcion: workflow.descripcion || '',
        rol_minimo_acceso: workflow.rol_minimo_acceso || '',
      });
    }
  }, [workflow]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!workflow) {
      setFormData({
        nombre: '',
        descripcion: '',
        rol_minimo_acceso: '',
      });
    }
  };

  return (
    <form className="workflow-form" onSubmit={handleSubmit}>
      <h2>{workflow ? 'Editar Workflow' : 'Crear Nuevo Workflow'}</h2>
      
      <div className="form-group">
        <label htmlFor="nombre">Nombre *</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          placeholder="Ingrese el nombre del workflow"
        />
      </div>

      <div className="form-group">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="Ingrese una descripción (opcional)"
          rows="4"
        />
      </div>

      <div className="form-group">
        <label htmlFor="rol_minimo_acceso">Rol Mínimo de Acceso *</label>
        <select
          id="rol_minimo_acceso"
          name="rol_minimo_acceso"
          value={formData.rol_minimo_acceso}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione un rol</option>
          <option value="usuario">Usuario</option>
          <option value="supervisor">Supervisor</option>
          <option value="administrador">Administrador</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {workflow ? 'Actualizar' : 'Crear'}
        </button>
        {workflow && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default WorkflowForm;
