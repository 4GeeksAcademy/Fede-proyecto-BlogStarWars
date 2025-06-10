import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const DetailsInfo = () => {

    const { uid, type } = useParams(null);

    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            let resourceType = type;

            if (!resourceType) {
                if (window.location.pathname.includes('/person/')) {
                    resourceType = 'people';
                } else if (window.location.pathname.includes('/planet/')) {
                    resourceType = 'planets';
                } else {
                    console.error("Tipo de recurso no definido")
                    return;
                }
            }

            try {
                const response = await fetch(`https://www.swapi.tech/api/${resourceType}/${uid}`);

                console.log(response)
                if (!response.ok) {
                    console.error([`Error al cargar los detalles: ${response.status} , ${response.statusText}`])
                    return;
                }

                const data = await response.json();
                setDetails(data.result.properties)
            } catch (err) {
                console.error("Error al obtener detalles:", err);
            }
        };

        if (uid) {
            fetchDetails();
        }

    }, [uid, type]);

    if (!details) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <p>Cargando información o elemento no encontrado...</p>
            </div>
        );
    }

    let resourceTypeForRender = type;
    if (!resourceTypeForRender) { 
        if (window.location.pathname.includes('/person/')) {
            resourceTypeForRender = 'people';
        } else if (window.location.pathname.includes('/planet/')) {
            resourceTypeForRender = 'planets';
        }
    }

    return (
        <div className="container mt-4">
            <div className='row p-3'>
                <div className="col-6"
                style={{  }}>

                    <img className="img-fluid"
                        src={"https://plus.unsplash.com/premium_photo-1674667061200-335314863fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0YXJ3YXJzfGVufDB8fDB8fHww"}
                        alt={details.name || "Imagen del personaje/planeta"}
                        style={{width: '600px', height: '500px',
                        objectFit: 'cover', }}
                        
                    />
                </div>
                <div className="col-6">
                    <h2>{details.name}</h2>
                    <div style={{ }}>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis diam, feugiat sit amet elit vitae, posuere convallis tellus. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque efficitur eu lorem in blandit. Cras luctus erat id erat ultricies euismod. Donec justo orci, consequat eget mollis id, aliquam vel augue. Fusce ac tincidunt mi, sed egestas lorem. Praesent et massa eget risus vehicula condimentum et sit amet dui. Donec at ligula eu massa tristique mollis. Proin blandit consectetur leo. Nam libero ipsum, euismod vitae pulvinar at, pulvinar sed felis. Proin tempus nisl sed fringilla scelerisque. Nunc vel dolor tempor, euismod orci et, tempor est. Nunc eu lectus sodales, rhoncus sapien quis, porta nibh. Nam vehicula, nibh id elementum aliquam, nisl nisl semper nibh, quis venenatis risus dolor non purus. Nullam eu arcu ut eros tincidunt tempus ac et ligula.
                        </p>
                    </div>
                </div>
            </div>
            <div className='m-4 border-top pt-4'>
                <h5>Detalles Específicos:</h5>
                <ul className="list-unstyled">
                    {resourceTypeForRender === 'people' && (
                        <>
                            <li><strong>Altura:</strong> {details.height} cm</li>
                            <li><strong>Peso:</strong> {details.mass} kg</li>
                            <li><strong>Color de Pelo:</strong> {details.hair_color}</li>
                            <li><strong>Color de Piel:</strong> {details.skin_color}</li>
                            <li><strong>Color de Ojos:</strong> {details.eye_color}</li>
                            <li><strong>Año de Nacimiento:</strong> {details.birth_year}</li>
                            <li><strong>Género:</strong> {details.gender}</li>
                        </>
                    )}
                    {resourceTypeForRender === 'planets' && (
                        <>
                            <li><strong>Diámetro:</strong> {details.diameter} km</li>
                            <li><strong>Período de Rotación:</strong> {details.rotation_period} horas</li>
                            <li><strong>Período Orbital:</strong> {details.orbital_period} días</li>
                            <li><strong>Gravedad:</strong> {details.gravity}</li>
                            <li><strong>Población:</strong> {details.population}</li>
                            <li><strong>Clima:</strong> {details.climate}</li>
                            <li><strong>Terreno:</strong> {details.terrain}</li>
                            <li><strong>Superficie de Agua:</strong> {details.surface_water}%</li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};