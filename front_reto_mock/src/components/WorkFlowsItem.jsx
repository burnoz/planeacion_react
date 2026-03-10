import React from 'react';

const WorkflowItem = ({ workflow, onDelete, onEdit }) => {
    return (
        <div className="country-item">
            <div className="country-info">
                <h3>{workflow.nombre}</h3>
                <p><strong>Descripción:</strong> {workflow.descripcion || 'No especificada'}</p>
                <p><strong>Rol mínimo acceso:</strong> {workflow.rol_minimo_acceso}</p>
            </div>
            <div className="country-actions">
                <button onClick={onEdit} className="edit-btn">Editar</button>
                <button onClick={onDelete} className="delete-btn">Eliminar</button>
            </div>
        </div>
    );
};

export default WorkflowItem;