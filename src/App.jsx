import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {

  const [city, setCity] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">

      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow">

        <h1 className="text-2xl font-bold text-center mb-4">
          Weather App
        </h1>

        <SearchBar setCity={setCity} />

        <WeatherCard city={city} />

      </div>

    </div>
  );
}