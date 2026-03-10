import React, { useState, useEffect } from 'react';
import { getWorkflows, deleteWorkflow } from '../services/api';
import WorkflowItem from './WorkFlowsItem';
import WorkflowForm from './WorkflowsForm';

const WorkflowList = () => {
    const [workflows, setWorkflows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);

    const fetchWorkflows = async () => {
        setLoading(true);
        try {
            const data = await getWorkflows();
            setWorkflows(data);
            setError(null);
        } catch (err) {
            setError('Error al cargar los workflows');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWorkflows();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este workflow?')) {
            try {
                await deleteWorkflow(id);
                setWorkflows(workflows.filter(workflow => workflow.id !== id));
            } catch (err) {
                setError('Error al eliminar el workflow');
            }
        }
    };

    const handleEdit = (id) => {
        setEditingId(id);
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const handleFormSubmit = () => {
        fetchWorkflows();
        setEditingId(null);
    };

    if (loading) return <div>Cargando workflows...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="country-list">
            <h2>Lista de Workflows</h2>
            {!editingId && (
                <div className="new-country">
                    <h3>Agregar Nuevo Workflow</h3>
                    <WorkflowForm onSubmitSuccess={handleFormSubmit} />
                </div>
            )}
            <div className="countries">
                {workflows.length === 0 ? (
                    <p>No hay workflows registrados.</p>
                ) : (
                    workflows.map(workflow => (
                        <div key={workflow.id}>
                            {editingId === workflow.id ? (
                                <div className="edit-form">
                                    <h3>Editar Workflow</h3>
                                    <WorkflowForm
                                        workflow={workflow}
                                        onSubmitSuccess={handleFormSubmit}
                                        onCancel={handleCancelEdit}
                                    />
                                </div>
                            ) : (
                                <WorkflowItem
                                    workflow={workflow}
                                    onDelete={() => handleDelete(workflow.id)}
                                    onEdit={() => handleEdit(workflow.id)}
                                />
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
export default WorkflowList;