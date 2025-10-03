import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../const";
import { Title } from "../components/TITLE/Title";
import titleStyles from "../components/TITLE/Title.module.css";
import ButtonStyles from "../components/BUTTON/Button.module.css";
import homeStyles from "../HomePage.module.css";

export default function HomePage() {
  const [input, setInput] = useState("");
  const onChangeInput = (e) => setInput(e.target.value);

  return (
 <>
  <Title className={titleStyles.title}>Weather App</Title>
  <form>
        <p className={homeStyles.text}>Enter the city you want to search!</p>
    <input
      type="text"
      placeholder="Please enter your city"
      value={input}
          onChange={onChangeInput}
          className={homeStyles.input}
    />
    <Link to={`${ROUTES.WEATHER}?city=${input}`}>
          <button className={ButtonStyles.searchButton }>Search</button>
    </Link>
  </form>
</>
);
}

