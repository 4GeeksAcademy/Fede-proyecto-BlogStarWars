import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para la validación de props


export const CardInfo = ({ imageUrl }) => {

    const defaultImageUrl = "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhcndhcnN8ZW58MHx8MHx8fDA%3D";

    const finalImageUrl = imageUrl && imageUrl.trim() !== '' ? imageUrl : defaultImageUrl;

    return (
        <div className="card m-2" style={{ width: "400px" }}>
            <img
                src={finalImageUrl}
                className="card-img-top "
                alt="Imagen de la tarjeta"
                style={{ height: "18rem" }}
                 />
            <div className="card-body d-flex flex-column text-start">
                <p className="card-text">nombre</p>
                <p className="card-text">sexo</p>
                <p className="card-text">edad</p>
                <button>leer mas</button>
            </div>
        </div>
    );
};



