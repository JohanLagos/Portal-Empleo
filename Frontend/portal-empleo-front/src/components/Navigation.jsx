import {Link} from "react-router-dom";
import { LogoutButton } from "./btn-cerrar-sesion";

export function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Portal de Empleo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registrar-Usuario">Registrar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                        </li>
                        <li className="nav-item">
                            <LogoutButton />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registrar-vacante">Registrar Vacante</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}