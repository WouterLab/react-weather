import React from 'react';
import styles from './Header.module.scss';
import { TiWeatherCloudy } from 'react-icons/ti'

const Header = () => {
  return <div className={styles.header}>
  <TiWeatherCloudy size='50px' className={styles.logo}/>
  <p className={styles.logo__text}>React Weather</p>
  </div>;
};

export default Header;
