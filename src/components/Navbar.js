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
            document.title = "Text Utils ⚫"
        } else if (lightOrDark === "Light") {
            document.body.style.backgroundColor = "white"
            document.body.style.color = "black"
            setlightOrDark("Dark")
            document.title = "Text Utils ⚪"
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
                            <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Features
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item">Convert to Uppercase</li>
                                <li className="dropdown-item">Convert to Lowercase</li>
                                <li className="dropdown-item">Convert to Capitalized</li>
                                <li className="dropdown-item">Clear Text</li>
                                <li className="dropdown-item">Remove Extra Spaces</li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={switchModes} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Switch {lightOrDark} Mode</label>
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