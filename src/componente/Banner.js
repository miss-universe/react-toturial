import React from 'react';
import styles from "./Banner.module.css";
import banner from "../images/banner.jpg";

const Banner = () => {
    return (
        <div className={styles.container}>
          
            <img src={banner} alt="Banner"/>
            <div className={styles.textContainer}>
            <h1>Móvil</h1>
            <p>
                We are selling <span>Cellphone</span> 
            </p>
            </div>
        </div>
    );
};

export default Banner;