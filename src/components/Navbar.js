// import React , {useState} from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.appName}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About App</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Functions
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Convert to Uppercase</a></li>
                                <li><a className="dropdown-item" href="#">Convert to Lowercase</a></li>
                                <li><a className="dropdown-item" href="#">Convert to Capitalized</a></li>
                                <li><a className="dropdown-item" href="#">Clear Text</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success">Search</button>
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