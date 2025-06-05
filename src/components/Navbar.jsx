import { Link } from "react-router-dom";

export const Navbar = () => {

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
					<button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
						<span className="visually-hidden">Toggle Dropend</span>
					</button>
					<ul className="dropdown-menu">
						{/* <!-- Dropdown menu links --> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};