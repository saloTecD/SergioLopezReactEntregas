
import CartWidget from "./CartWidget";
import logo from "./images/logoF.png"

const NavBar = () => {
    return (
        <div className="container">
            <div className="row" >
                <div className="col-8" >
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid" id="ContenedorNavBar" >
                            <a className="navbar-brand" href="/index.html"><img src={logo} alt="logo" /> SaloTec Music</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="/index.html">Listas de musica Recomendadas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/index.html">Favoritos</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Productos
                                        </a>
                                        <ul className="dropdown-menu" id="SubMenu">
                                            <li><a className="dropdown-item" href="/index.html">Rock</a></li>
                                            <li><a className="dropdown-item" href="/index.html">Pop</a></li>
                                            <li><a className="dropdown-item" href="/index.html">Salsa</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;