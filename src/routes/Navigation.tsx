import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	NavLink,
	Navigate,
} from "react-router-dom";

import Logo from "../logo.svg";

const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<img src={Logo} alt="React logo" />
					<ul>
						<li>
							{/* Navlink recibe como parámetro en su className una función con varios parámetros de react-router-dom */}
							<NavLink
								to="/home"
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/users"
								className={({ isActive }) =>
									isActive ? "nav-active" : ""
								}
							>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="about" element={<h1>About page</h1>} />
					<Route path="users" element={<h1>Users page</h1>} />
					<Route path="home" element={<h1>Home page</h1>} />

					{/* Ruta comodin, en caso que pongan una ruta equivocada */}
					<Route
						path="/*"
						element={<Navigate to="/home" replace />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default Navigation;
