const API_KEY = import.meta.env.VITE_WEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
    if (!city) return null;

    try {
        const res = await fetch(
            `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to fetch weather");
        }

        return data;

    } catch (error) {
        throw new Error(error.message || "Something went wrong");
    }
};