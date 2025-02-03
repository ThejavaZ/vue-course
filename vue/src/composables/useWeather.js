import { useWeatherStore } from "@/router/stores/weatherStore";
import { getTemperature } from "@/helpers/getWeather";

export const useWeather = async () => {
  const temperatura = await getTemperature();
  const weatherStore = useWeatherStore();
  weatherStore.temperature = temperatura;
};
