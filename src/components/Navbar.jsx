import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import React, { useState, useEffect } from "react";




export const Navbar = () => {
 	const { store, dispatch } = useGlobalReducer();

    


	const handleRemoveFavorite = (itemToRemove, itemType) => {
        dispatch({ type: "toggle_favorite", payload: itemToRemove, itemType: itemType });

    

    };
	const allFavorites = [...store.peopleFavorites, ...store.planetFavorites];


	return (
		<nav className="navbar navbar-light bg-emphasis">
			<div className="container">
				<Link to="/">
					
                    <img src="data:image/jpeg;base64,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" alt="" />
				</Link>
				<div className="btn-group">
					<Link to="/info" className="btn btn-secondary">
						Info
					</Link>
					<div className="dropdown"> 
                        <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favoritos

                            {allFavorites.length > 0 && (
                                <span className="badge bg-danger ms-1">
                                    {allFavorites.length}
                                </span>
                            )}
                        </button>
                        <ul className="dropdown-menu">
                            {allFavorites.length > 0 ? (
                                allFavorites.map((fav) => (
                                    <li key={`${fav.type}-${fav.uid}`}>
                                        <div className="dropdown-item d-flex justify-content-between align-items-center">
                                            <Link to={`/${fav.type}/${fav.uid}`} className="text-decoration-none text-dark flex-grow-1 me-2">
                                                {fav.name} ({fav.type === 'person' ? 'Personaje' : 'Planeta'})
                                            </Link>
                                            <button
                                                className="btn btn-sm btn-danger ms-2"
                                                onClick={() => handleRemoveFavorite(fav, fav.type)}
                                            >
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li><span className="dropdown-item">No hay favoritos</span></li>
                            )}
                        </ul>
                    </div>
					
				</div>
			</div>
		</nav>
	);
};