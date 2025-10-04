import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Title } from "../components/TITLE/Title";
import titleStyles from "../components/TITLE/Title.module.css";
import weatherStyles from "../Weather.module.css";

export default function WeatherPage() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=272a84bd8e26c1aaf13628a00f4caac1&units=metric`
        );
        if (!res.ok) {
          alert("都市が見つかりません。英語で入力してください。");
          setLoading(false);
          return;
        }
        const data = await res.json();

        setTimeout(() => {
          setWeather(data);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p className={weatherStyles.load}>Loading...</p>;

  return (
    <>
      <Title className={titleStyles.title}>Weather</Title>
      <p className={weatherStyles.text}><span>📍 &#x3000;</span> City: {weather.name}</p>
      <p className={weatherStyles.text}><span>🌡️ &#x3000;</span> Temp: {weather.main.temp}°C</p>
      <p className={weatherStyles.text}>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className={weatherStyles.icon}
        />
        Wx: {weather.weather[0].description}
        </p>
    </>
  );
}