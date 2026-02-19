import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const ImageGallery = () => {
  const [imageId, setImageId] = useState(1);
  const { data, loading, error } = useFetch(`https://picsum.photos/id/${imageId}/info`);

  const handleNext = () => {
    setImageId(prevId => prevId + 1);
  };

  const handlePrevious = () => {
    setImageId(prevId => prevId > 1 ? prevId - 1 : 1);
  };

  if (loading) {
    return (
      <div className="gallery-container">
        <h2>Cargando...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-container">
        <h2>Error: {error}</h2>
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      <h1>Galería de Imágenes Lorem Picsum</h1>
      
      {data && (
        <div className="image-info">
          <h2>ID: {data.id}</h2>
          <h3>Autor: {data.author}</h3>
          <img 
            src={data.download_url} 
            alt={`Foto por ${data.author}`}
            style={{ maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
          />
          <p>Dimensiones: {data.width} x {data.height}</p>
        </div>
      )}

      <div className="button-container">
        <button onClick={handlePrevious} disabled={imageId <= 1}>
          ← Anterior
        </button>
        <span style={{ margin: '0 20px' }}>Imagen #{imageId}</span>
        <button onClick={handleNext}>
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
