import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../services/weatherApi";

export const useWeather = (city) => {
    return useQuery({
        queryKey: ["weather", city],
        queryFn: () => fetchWeather(city),
        enabled: !!city
    });
};