import React from 'react';
import styles from './Main.module.scss';
import imgCloud from './images/cloud.png';
import imgSun from './images/sun.png';
import imgRain from './images/rain.png';

const Main = (props) => {
  return (
    <div className={styles.main}>
      <h1>
        {props.city}, {props.country}
      </h1>
      {(props.clouds > 50) && (props.humidity < 50) && (
        <div>
          <img className={styles.mainImg} src={imgCloud} alt='weather' />
          <h3>It's cloudy</h3>
          <p className={styles.temp}>
            {Math.round(props.temp)}
            <span>°c</span>
          </p>
        </div>
      )}
      {(props.clouds > 50) && (props.humidity > 50) && (
        <div>
          <img className={styles.mainImg} src={imgRain} alt='weather' />
          <h3>It's rainy</h3>
          <p className={styles.temp}>
            {Math.round(props.temp)}
            <span>°c</span>
          </p>
        </div>
      )}
      {(props.clouds < 50) && (
        <div>
          <img className={styles.mainImg} src={imgSun} alt='weather' />
          <h3>It's sunny</h3>
          <p className={styles.temp}>
            {Math.round(props.temp)}
            <span>°c</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Main;
