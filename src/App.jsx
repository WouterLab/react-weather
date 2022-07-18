import { useState, useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Main from './components/Main/Main';

const API_KEY = '118249e02e2c0a717876029d2e232777';

export default function App() {
  const state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    humidity: undefined,
    pressure: undefined,
    clouds: undefined,
    error: undefined,
  };

  const [info, getInfo] = useState(state);
  useEffect(() => {
    const raw = localStorage.getItem('forecasts') || []
    getInfo(JSON.parse(raw))
  }, [])
  useEffect(() => {
    localStorage.setItem('forecasts', JSON.stringify(info))
  }, [info])

  const getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await api_url.json();
    console.log(data);
    if (city) {
      getInfo({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        clouds: data.clouds.all,
        error: undefined,
      });
    } else {
      getInfo({
        temp: undefined,
        city: undefined,
        country: undefined,
        wind: undefined,
        humidity: undefined,
        pressure: undefined,
        clouds: undefined,
        error: 'enter valid city',
      });
    }
  };

  return (
    <div className='App animated'>
      <Header />
      <div className='error animated'>
        {info.city === undefined && (
          <h1>Please enter the city to get the weather</h1>
        )}
        {info.error && <h2>{info.error}</h2>}
      </div>
      {info.city && (
        <Main
          humidity={info.humidity}
          country={info.country}
          city={info.city}
          clouds={info.clouds}
          temp={info.temp}
        />
      )}
      {info.city && (
        <Info
          wind={info.wind}
          humidity={info.humidity}
          pressure={info.pressure}
        />
      )}
      <Footer getWeather={getWeather} />
    </div>
  );
}
