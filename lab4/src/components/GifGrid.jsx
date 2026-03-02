import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    
    return (
        <div className="gif-grid-container">
            <h3 className="category-title">{category}</h3>
            
            {isLoading ? (
                <div className="loading-container">
                    <div className="loader"></div>
                    <p className="loading-text">Cargando GIFs increíbles...</p>
                </div>
            ) : (
                <div className="card-grid">
                    {images.map((image) => (
                        <GifItem key={image.id} {...image} />
                    ))}
                </div>
            )}
        </div>
    )
}