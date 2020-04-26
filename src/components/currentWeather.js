import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../util';


class CurrentWeather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: props.data.get('day-0')
    }
  }

  render() {
    const temperature = Math.round(+this.state.weather.temp.day);
    const { description } = this.state.weather.weather[0];

    return (
      <div className="current-weather">
        <p>{capitalize(description)}</p>
        <h1 className="large-font">{temperature} &#176;C</h1>
      </div>
    );
  }
}

CurrentWeather.propTypes = {
  data: PropTypes.object.isRequired
}

export default CurrentWeather
