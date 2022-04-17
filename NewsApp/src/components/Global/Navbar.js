import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/Navbar.module.css';
import WebGradient from './WebGradient';

function Navbar() {
    // const feed

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark ${styles.nav_body}`}>
                <div className="container">
                    <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-news-news-kiranshastry-lineal-color-kiranshastry-1.png"/>
                    <a className="navbar-brand"><Link className={`navbar-brand ${styles.nav_title}`} to="/">NewsApp</Link></a>
                </div>
            </nav>
            <WebGradient/>
        </>
    )
}

export default Navbar;