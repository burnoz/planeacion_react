import './WorkflowList.css';

function WorkflowList({ workflows, onEdit, onDelete }) {
  if (workflows.length === 0) {
    return (
      <div className="workflow-list-empty">
        <p>No hay workflows disponibles. Crea uno nuevo para comenzar.</p>
      </div>
    );
  }

  return (
    <div className="workflow-list">
      <h2>Lista de Workflows</h2>
      <div className="table-container">
        <table className="workflows-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Rol Mínimo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((workflow) => (
              <tr key={workflow.id}>
                <td>{workflow.id}</td>
                <td>{workflow.nombre}</td>
                <td>{workflow.descripcion || '-'}</td>
                <td>
                  <span className={`role-badge role-${workflow.rol_minimo_acceso}`}>
                    {workflow.rol_minimo_acceso}
                  </span>
                </td>
                <td className="actions">
                  <button
                    className="btn-action btn-edit"
                    onClick={() => onEdit(workflow)}
                    title="Editar"
                  >
                    ✏️
                  </button>
                  <button
                    className="btn-action btn-delete"
                    onClick={() => onDelete(workflow.id)}
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkflowList;
