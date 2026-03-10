import React, { useState, useEffect } from 'react';
import { createWorkflow, updateWorkflow } from '../services/api.js';

const WorkflowForm = ({ workflow, onSubmitSuccess, onCancel }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        rol_minimo_acceso: ''
    });

    const [submitting, setSubmitting] = useState(false);

    const [error, setError] = useState(null);
    useEffect(() => {
        if (workflow) {
            setFormData({
                nombre: workflow.nombre || '',
                descripcion: workflow.descripcion || '',
                rol_minimo_acceso: workflow.rol_minimo_acceso || ''
            });
        }
    }, [workflow]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.nombre.trim()) {
            setError('El nombre del workflow es obligatorio');
            return;
        }
        if (!formData.rol_minimo_acceso) {
            setError('El rol mínimo de acceso es obligatorio');
            return;
        }

        setSubmitting(true);
        setError(null);

        try {
            if (workflow) {
                await updateWorkflow(workflow.id, formData);
            } else {
                await createWorkflow(formData);
            }
            setFormData({ nombre: '', descripcion: '', rol_minimo_acceso: '' });
            if (onSubmitSuccess) onSubmitSuccess();
        } catch (err) {
            setError('Error al guardar el workflow');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="country-form">
            {error && <div className="error">{error}</div>}
            <div className="form-group">
                <label htmlFor="nombre">Nombre*:</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre}
                    onChange={handleChange} disabled={submitting} required />
            </div>
            <div className="form-group">
                <label htmlFor="descripcion">Descripción:</label>
                <input type="text" id="descripcion" name="descripcion" value={formData.descripcion}
                    onChange={handleChange} disabled={submitting} />
            </div>
            <div className="form-group">
                <label htmlFor="rol_minimo_acceso">Rol mínimo acceso*:</label>
                <input type="number" id="rol_minimo_acceso" name="rol_minimo_acceso" value={formData.rol_minimo_acceso}
                    onChange={handleChange} disabled={submitting} required />
            </div>
            <div className="form-actions">
                <button type="submit" disabled={submitting}>
                    {submitting ? 'Guardando...' : workflow ? 'Actualizar' : 'Crear'}
                </button>
                {onCancel && (
                    <button type="button" onClick={onCancel} disabled={submitting}>
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
};
export default WorkflowForm;