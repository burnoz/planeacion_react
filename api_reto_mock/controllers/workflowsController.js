const pool = require('../db');

// Obtener todos los workflows
exports.getAllWorkflows = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM workflows ORDER BY nombre');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener los workflows:', error);
        res.status(500).json({ error: 'Error al obtener los workflows' });
    }
};

// Obtener un workflow por ID
exports.getWorkflowById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM workflows WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Workflow no encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Error al obtener el workflow:', error);
        res.status(500).json({ error: 'Error al obtener el workflow' });
    }
};

// Crear un nuevo workflow
exports.createWorkflow = async (req, res) => {
    const { nombre, descripcion, rol_minimo_acceso } = req.body;
    // Validación básica
    if (!nombre || !rol_minimo_acceso) {
        return res.status(400).json({ error: 'El nombre y el rol mínimo de acceso son obligatorios' });
    }
    try {
        const [result] = await pool.query(
            'INSERT INTO workflows (nombre, descripcion, rol_minimo_acceso) VALUES (?, ?, ?)',
            [nombre, descripcion, rol_minimo_acceso]
        );
        res.status(201).json({
            id: result.insertId,
            nombre,
            descripcion,
            rol_minimo_acceso
        });
    } catch (error) {
        console.error('Error al crear el workflow:', error);
        res.status(500).json({ error: 'Error al crear el workflow' });
    }
};

// Actualizar un workflow existente
exports.updateWorkflow = async (req, res) => {
    const { nombre, descripcion, rol_minimo_acceso } = req.body;
    const workflowId = req.params.id;
    // Validación básica
    if (!nombre || !rol_minimo_acceso) {
        return res.status(400).json({ error: 'El nombre y el rol mínimo de acceso son obligatorios' });
    }
    try {
        // Verificar si el workflow existe
        const [existingWorkflow] = await pool.query('SELECT * FROM workflows WHERE id = ?', [workflowId]);
        if (existingWorkflow.length === 0) {
            return res.status(404).json({ error: 'Workflow no encontrado' });
        }
        // Actualizar el workflow
        await pool.query(
            'UPDATE workflows SET nombre = ?, descripcion = ?, rol_minimo_acceso = ? WHERE id = ?',
            [nombre, descripcion, rol_minimo_acceso, workflowId]
        );
        res.json({
            id: parseInt(workflowId),
            nombre,
            descripcion,
            rol_minimo_acceso
        });
    } catch (error) {
        console.error('Error al actualizar el workflow:', error);
        res.status(500).json({ error: 'Error al actualizar el workflow' });
    }
};

// Eliminar un workflow
exports.deleteWorkflow = async (req, res) => {
    const workflowId = req.params.id;
    try {
        // Verificar si el workflow existe
        const [existingWorkflow] = await pool.query('SELECT * FROM workflows WHERE id = ?', [workflowId]);
        if (existingWorkflow.length === 0) {
            return res.status(404).json({ error: 'Workflow no encontrado' });
        }
        // Eliminar el workflow
        await pool.query('DELETE FROM workflows WHERE id = ?', [workflowId]);
        res.json({ message: 'Workflow eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar el workflow:', error);
        res.status(500).json({ error: 'Error al eliminar el workflow' });
    }
};