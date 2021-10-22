import React from 'react'
import './Navbar.css';
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <ul itemID = "NavUl">
            <li>{props.appName}</li>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>

    )
}

Navbar.propTypes = {
    appName : PropTypes.string
}
Navbar.defaultProps = {
    appName : "App Name"
}