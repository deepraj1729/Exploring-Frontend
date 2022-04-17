import React from 'react'
import styles from './css/Footer.module.css';
import WebGradient from './WebGradient';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div>
            <WebGradient/>
            <div className={styles.footer}> 
                <div className={styles.copyright}>
                    <strong>Copyright &copy; {year}</strong>
                    <span className={styles.footLogo}> NewsApp </span>. All Rights Reserved
                </div>
            </div>
        </div>

    )
}

export default Footer;