import { defineStore } from "pinia";
import { ref } from "vue";

export const useWeatherStore = defineStore("weather", () => {
  const temperature = ref(0);
  const setTemperatura = (temp) => {
    temperature.value = temp;
  };
  return {
    temperature,
    setTemperatura,
  };
});
