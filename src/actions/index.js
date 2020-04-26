import * as types from './actionTypes';
import axios from 'axios';

const COUNT = 6;
const COUNTRY = "ca";
const KEY = '92aa6311977d4ced945bf75808bd0097';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?APPID=${KEY}&units=metric&cnt=${COUNT}`;

export function fetchWeather(CITY = "toronto") {
  return function(dispatch) {
    dispatch(requestWeather());
    const URL = `${API_URL}&q=${CITY},${COUNTRY}`;
    axios.get(URL)
        .then((res) => {
          dispatch(receiveWeather(res.data))
        })
        .catch((error) => {
          console.error(error);
          alert('Unable to retrieve weather data. Please refresh.')
        })
  }
}

function requestWeather() {
  return {
    type: types.REQUEST_WEATHER
  }
}

function receiveWeather(payload) {
  return {
    type: types.RECEIVE_WEATHER,
    payload
  }
}
