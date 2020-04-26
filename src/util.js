//helper functions

import moment from 'moment';

export const listDailyWeather = function(array) {
  const week = new Map()
  array.forEach((values, i) => {
    const day = `day-${i}`
    values.dt = moment(values.dt*1000).format("dddd")
    week.set(day, values)
  })
  return week
}

export const capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
