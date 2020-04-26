import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FiveDayListItem from '../fiveDayListItem'
import './fiveDayList.css';

class FiveDayList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: props.data
    }
  }

  renderDays() {
    var fiveDays = [...this.state.weather.values()]

    //we are not interested in current day
    fiveDays.shift();

    const days = fiveDays.map((day) => {
      const { icon, description } = day.weather[0],
      iconUrl = `http://openweathermap.org/img/wn/${icon}.png`,
      iconAlt = `${day.dt}'s icon depicting ${description}`,
      date = day.dt,
      temp = day.temp.max;

      const itemProps = { iconUrl, iconAlt, date, temp };

      return (
        <FiveDayListItem {...itemProps} key={date} />
      )
    })
    return days
  }

  render() {
    return (
      <div className="five-day">
        <ul className="five-day-list">
          {this.renderDays()}
        </ul>
      </div>
    )
  }
}


FiveDayList.propTypes = {
  data: PropTypes.object.isRequired
}

export default FiveDayList
