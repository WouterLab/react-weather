import React from 'react';
import styles from './Info.module.scss';
import wind from './images/WeatherIcon27.png';
import humidity from './images/WeatherIcon17.png';
import pressure from './images/WeatherIcon4.png';

const Info = (props) => {
  return (
    <div className={styles.info}>
      <div className={styles.imgBox} style={{width: '80px'}}>
        <img className={styles.img} src={wind} alt='wind' />
        <div className={styles.img__text}>
          Wind <br /> {props.wind} m/s
        </div>
      </div>
      <div className={styles.imgBox}>
        <img className={styles.img} src={humidity} alt='humidity' />
        <div className={styles.img__text}>
        Humidity <br /> {props.humidity}%
        </div>
      </div>
      <div className={styles.imgBox}>
        <img className={styles.img} src={pressure} alt='pressure' />
        <div className={styles.img__text}>
        Pressure <br /> {props.pressure} hPa
        </div>
      </div>
    </div>
  );
};

export default Info;
