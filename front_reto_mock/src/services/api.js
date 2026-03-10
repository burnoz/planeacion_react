// src/services/api.js
import axios from 'axios';
const API_URL = 'http://localhost:5000/api/workflows';

export const getWorkflows = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los workflows:', error);
        throw error;
    }
};

export const getWorkflow = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener el workflow:', error);
        throw error;
    }
};

export const createWorkflow = async (workflow) => {
    try {
        const response = await axios.post(API_URL, workflow);
        return response.data;
    } catch (error) {
        console.error('Error al crear el workflow:', error);
        throw error;
    }
};

export const updateWorkflow = async (id, workflow) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, workflow);
        return response.data;
    } catch (error) {
        console.error('Error al actualizar el workflow:', error);
        throw error;
    }
};

export const deleteWorkflow = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el workflow:', error);
        throw error;
    }
};