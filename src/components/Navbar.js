import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Link } from "react-router-dom";

export default function Navbar(props) {
    const [lightOrDark, setlightOrDark] = useState("Dark")
    const switchModes = () => {
        if (lightOrDark === "Dark") {
            document.body.style.backgroundColor = "#363e45"
            document.body.style.color = "white"
            setlightOrDark("Light")
            document.title = document.title + "-Dark"
        } else if (lightOrDark === "Light") {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            setlightOrDark("Dark")
            document.title = "Text Utils"
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.appName}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About App</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Functions
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Convert to Uppercase</a></li>
                                <li><a className="dropdown-item" href="#">Convert to Lowercase</a></li>
                                <li><a className="dropdown-item" href="#">Convert to Capitalized</a></li>
                                <li><a className="dropdown-item" href="#">Clear Text</a></li>
                                <li><a className="dropdown-item" href="#">Remove Extra Spaces</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div class="form-check form-switch">
                            <input class="form-check-input" onClick={switchModes} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Switch {lightOrDark} Mode</label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    appName: PropTypes.string
}
Navbar.defaultProps = {
    appName: "TextUtils"
}