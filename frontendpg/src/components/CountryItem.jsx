import React from 'react';

const CountryItem = ({ country, onDelete, onEdit }) => {
    return (
        <div className="country-item">
            <div className="country-info">
                <div className="country-detail">
                    <span className="detail-label">Nombre:</span>
                    <span className="detail-value">{country.name}</span>
                </div>
                <div className="country-detail">
                    <span className="detail-label">Capital:</span>
                    <span className="detail-value">{country.capital || 'No especificada'}</span>
                </div>
                <div className="country-detail">
                    <span className="detail-label">Moneda:</span>
                    <span className="detail-value">{country.currency || 'No especificada'}</span>
                </div>
            </div>
            <div className="country-actions">
                <button onClick={onEdit} className="btn btn-edit">
                    <span className="btn-icon">✏️</span>
                    Editar
                </button>
                <button onClick={onDelete} className="btn btn-delete">
                    <span className="btn-icon">🗑️</span>
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default CountryItem;