import React from 'react';
import styles from './Footer.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

const Footer = (props) => {
  const [city, setCity] = useState('');
  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    setTimeout((() => setCity('')), 100)
  }

  return (
    <div>
      <form className={styles.footer} onSubmit={props.getWeather}>
        <input
          name='city'
          className={styles.input}
          type='text'
          placeholder='Choose city'
          value={city}
          onChange={handleInput}
          autocomplete="off"
        />
        <button id='btnBox' onClick={handleClick} className={styles.btnBox}>
          <AiOutlineSearch className={styles.button} size='40%' />
        </button>
      </form>
    </div>
  );
};

export default Footer;
