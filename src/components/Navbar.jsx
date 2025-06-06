import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";


export const Navbar = () => {
 	const { store, dispatch } = useGlobalReducer();

	const handleRemoveFavorite = (itemToRemove, itemType) => {
        dispatch({ type: "toggle_favorite", payload: itemToRemove, itemType: itemType });

    };
	const allFavorites = [...store.peopleFavorites, ...store.planetFavorites];


	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">StarWars logo</span>
				</Link>
				<div className="btn-group dropend">
					<Link to="/info" className="btn btn-secondary">
						Info
					</Link>
					<div className="btn-group dropend"> {/* o 'dropdown' si prefieres que se despliegue hacia abajo */}
                        <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle" // Cambiado a btn-primary o el que prefieras
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favoritos
                            {/* Muestra el total combinado */}
                            {allFavorites.length > 0 && (
                                <span className="badge bg-danger ms-1">
                                    {allFavorites.length}
                                </span>
                            )}
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            {allFavorites.length > 0 ? (
                                allFavorites.map((fav) => (
                                    // La key debe ser única para cada elemento, combinando tipo y UID
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
					<ul className="dropdown-menu">
						{/* <!-- Dropdown menu links --> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};