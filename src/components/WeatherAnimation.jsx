import { motion } from "framer-motion";

export default function WeatherAnimation({ type }) {

    if (type === "Clear") {
        return (
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="text-6xl"
            >
                ☀️
            </motion.div>
        );
    }

    if (type === "Clouds") {
        return (
            <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="text-6xl"
            >
                ☁️
            </motion.div>
        );
    }

    if (type === "Rain") {
        return (
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="text-6xl"
            >
                🌧
            </motion.div>
        );
    }

    if (type === "Snow") {
        return (
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-6xl"
            >
                ❄️
            </motion.div>
        );
    }

    return <div className="text-6xl">🌤</div>;
}