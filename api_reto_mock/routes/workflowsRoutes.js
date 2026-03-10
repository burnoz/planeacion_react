// routes/workflowsRoutes.js
const express = require('express');
const workflowsController = require('../controllers/workflowsController');

const router = express.Router();

// Rutas para los workflows
router.get('/', workflowsController.getAllWorkflows);
router.get('/:id', workflowsController.getWorkflowById);
router.post('/', workflowsController.createWorkflow);
router.put('/:id', workflowsController.updateWorkflow);
router.delete('/:id', workflowsController.deleteWorkflow);
module.exports = router;