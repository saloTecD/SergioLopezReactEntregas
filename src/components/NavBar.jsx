
import logo from "./images/logoF.png"

const NavBar = () => {
    return (
        <div classNameName="container">
            <div classNameName="row">
                <div classNameName="col">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid" id="bodyFull">
                            <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">Productos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Listas Destacadas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Favoritos</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;