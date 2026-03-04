import { useWeather } from "../hooks/useWeather";
import Loader from "./Loader";

import { Card, CardContent } from "@/components/ui/card";

import { Droplets, Wind, Sunrise, Sunset, Thermometer } from "lucide-react";
import { motion } from "framer-motion";
import WeatherAnimation from "./WeatherAnimation";
export default function WeatherCard({ city }) {

    const { data, isLoading, isError, error } = useWeather(city);

    if (!city) return null;

    if (isLoading) return <Loader />;

    if (isError) {
        return (
            <p className="text-red-500 text-center">
                {error.message}
            </p>
        );
    }

    // Convert sunrise/sunset timestamps
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });

    // Dynamic background based on weather
    const weatherMain = data.weather[0].main;

    let bg = "bg-neutral-100";

    if (weatherMain === "Clear") bg = "bg-yellow-100";
    if (weatherMain === "Rain") bg = "bg-blue-100";
    if (weatherMain === "Clouds") bg = "bg-gray-100";
    if (weatherMain === "Snow") bg = "bg-cyan-100";

    return (
        <motion.div
            key={city}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ perspective: 1000 }}
        >

            <Card className={`shadow-lg ${bg}`}>
                <CardContent className="p-6 text-center space-y-4">

                    <h2 className="text-2xl font-semibold">
                        {data.name}, {data.sys.country}
                    </h2>
                    <WeatherAnimation type={weatherMain} />

                    <p className="text-4xl font-bold">
                        {Math.round(data.main.temp)}°C
                    </p>

                    <p className="capitalize text-muted-foreground">
                        {data.weather[0].description}
                    </p>

                    {/* Extra weather info */}

                    <div className="grid grid-cols-2 gap-4 pt-4 text-sm">

                        <div className="flex items-center gap-2 justify-center">
                            <Thermometer size={18} />
                            Feels {Math.round(data.main.feels_like)}°C
                        </div>

                        <div className="flex items-center gap-2 justify-center">
                            <Droplets size={18} />
                            {data.main.humidity}%
                        </div>

                        <div className="flex items-center gap-2 justify-center">
                            <Wind size={18} />
                            {data.wind.speed} m/s
                        </div>

                        <div className="flex items-center gap-2 justify-center">
                            <Sunrise size={18} />
                            {sunrise}
                        </div>

                        <div className="flex items-center gap-2 justify-center col-span-2">
                            <Sunset size={18} />
                            {sunset}
                        </div>

                    </div>

                </CardContent>
            </Card>

        </motion.div>
    );
}