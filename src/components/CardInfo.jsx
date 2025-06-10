import React from 'react';
import { Link } from 'react-router-dom';


export const CardInfo = ({ imageUrl, title, children, url, onToggleFavorite, isFavorite }) => {

    const defaultImageUrl = "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcndhcnN8ZW58MHx8MHx8fDA%3D";

    const finalImageUrl = imageUrl && imageUrl.trim() !== '' ? imageUrl : defaultImageUrl;

    return (
        <div className="card m-2 p-2" style={{ minWidth: "250px", flexShrink: 0 }}>
            <img
                src={finalImageUrl}
                className="card-img"
                alt="Imagen de la tarjeta"
                style={{ height: "18rem", objectFit: "cover", width: "100%" }}
                 />
            <div className="card-body d-flex flex-column text-start">
                <h5 className='card-title'>{title}</h5>
                {children}
                <Link to={url} className="btn btn-primary">Leer mas...</Link>
                <button
                        className={`btn btn-${isFavorite ? 'danger' : 'outline-warning'}`} // Cambia color si es favorito
                        onClick={onToggleFavorite} // Llama a la función al hacer clic
                    >
                        <i className={`fa-star ${isFavorite ? 'fas' : 'far'}`}></i> {/* Icono de estrella (requiere Font Awesome) */}
                    </button>
            </div>
        </div>
    );
};



