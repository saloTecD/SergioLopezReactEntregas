
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import logo from "./images/logoF.png"

const NavBar = () => {
    return (
        <div className="container">
            <div className="row" >
                <div className="col-8" >
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid" id="ContenedorNavBar" >
                            <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /> SaloTec Music</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname={"active"} to="/">Listas de musica Recomendadas</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeclassname={"active"} to="/">Favoritos</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Productos
                                        </NavLink>
                                        <ul className="dropdown-menu" id="SubMenu">
                                            <li><NavLink className="dropdown-item" activeclassname={"active"} to="/category/hamburguesas">Rock Hamburguesas</NavLink></li>
                                            <li><NavLink className="dropdown-item" activeclassname={"active"} to="/category/papas">Pop Papas</NavLink></li>
                                            <li><NavLink className="dropdown-item" activeclassname={"active"} to="/category/postres">Salsa Postres</NavLink></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;