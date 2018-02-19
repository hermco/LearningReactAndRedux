import axios from 'axios';

const API_KEY = "cf731fa987c7897780e255fb8e42b03d";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},fr`;
  const request = axios.get(url);
  return {
    type : FETCH_WEATHER,
    payload: request
  }
}
