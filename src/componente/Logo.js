import React from 'react';
import styles from "./Logo.module.css"
import apple from "../images/apple.jpg"
import samsung from "../images/samsung.jpg"
import xiaomi from "../images/xiaomi.png"

const Logo = () => {
    return (
        <div className={styles.container}>
            <h3>Who support us?</h3>
            <div>
                <img src={apple}  alt='phone'/>
                <img src={samsung}  alt='phone'/>
                <img src={xiaomi} alt='phone'/>
            </div>
        </div>
    );
};

export default Logo;