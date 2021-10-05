const NavBar = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-dark p-3">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item pt-1">
                            <a className="nav-link text-light fw-bolder" href="google.com">¿Quienes somos?</a>
                        </li>
                        <li className="nav-item dropdown pt-1">
                            <a className="nav-link dropdown-toggle text-light fw-bolder" href="google.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Servicios  
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="google.com">Electricidad</a></li>
                                <li><a className="dropdown-item" href="google.com">Plomeria</a></li>
                                <li><a className="dropdown-item" href="google.com">Remodelación de interiores y exteriores</a></li>
                                <li><a className="dropdown-item" href="google.com">Ampleación de interiores y exteriores</a></li>
                                <li><a className="dropdown-item" href="google.com">Mantenimiento en general</a></li>
                            </ul>
                        </li> 
                        <li className="nav-item pt-1">
                            <a className="nav-link text-light fw-bolder" href="google.com">Contactanos</a>
                        </li>
                        </ul>
                        <li className="d-flex">
                            <a href="google.com" className="navbar-brand text-light fw-bolder">
                                <img src="https://i.pinimg.com/564x/8e/84/34/8e843493ddb2934d79b62cd818786c88.jpg" alt="" width="30" height="25" className="d-inline-block m-3"/>
                                Mantenimiento Qro.
                            </a>
                        </li>                 
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar