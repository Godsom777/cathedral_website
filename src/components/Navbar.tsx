import React from 'react';
import '../styles/NavBar.css';

const NavBar: React.FC = () => {
    return (
        <>
            <header className="navbar position-sticky navbar-expand-lg navbar-light bg-light">
                <nav className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src='logo.png' alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Priests</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Chaplancies
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">School Chaplancies</a></li>
                                    <li><a className="dropdown-item" href="#">St. Mulumba Villa Annex 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Chaplains</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Schools</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Parishes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>

                        </ul>
                    </div>


                </nav>
            </header>
        </>
    );
};

export default NavBar;