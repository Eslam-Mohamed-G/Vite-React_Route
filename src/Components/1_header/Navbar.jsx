import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4">
                
                    <div className="container container-fluid">
                        <Link className="navbar-brand text-uppercase" to="/">
                            Start Framework
                        </Link>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav gap-3">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link text-uppercase"
                                        aria-current="page"
                                        to="about"
                                    >
                                        about
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" to="portfolio">
                                        Portfolio
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-uppercase" to="contact">
                                        contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                
            </nav>
        </>
    );
}

export default Navbar;
