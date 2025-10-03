// 親コンポーネント
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import { ROUTES } from "./const";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.WEATHER} element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  );
}





