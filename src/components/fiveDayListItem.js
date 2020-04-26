import React from 'react'

export default (props) => {
  const { iconUrl, iconAlt, date, temp } = props;
  return (
    <li className="five-day-list-item">
      <span>{date}</span> <span><img src={iconUrl} alt={iconAlt}/></span> <span>{Math.round(+temp)}&#176;C</span>
    </li>
  )
}
