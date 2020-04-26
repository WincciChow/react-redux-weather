import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import FiveDayList from './fiveDayList/fiveDayList';
import CurrentWeather from './currentWeather';
import '../index.css';


class Weather extends Component {
  componentWillMount() {
    this.props.fetchWeather();
  }

  renderLoading() {
    return (
      <div className="container center">
        Data Loading
      </div>
    )
  }

  renderWeather() {
    return (
      <div className="container center">
        <h1>{this.props.city}</h1>
        <CurrentWeather data={this.props.data} />
        <FiveDayList data={this.props.data} />
      </div>
    )
  }

  shouldRenderWeather() {
    if (this.props.isFetching || !this.props.data) {
      return (
        this.renderLoading()
      )
    } else {
      return (
        this.renderWeather()
      )
    }
  }

  render() {
    return (
      this.shouldRenderWeather()
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.weather.isFetching,
    data: state.weather.data,
    city: state.weather.city,
  }
}

Weather.propTypes= {
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.object,
  city: PropTypes.string
}

export default connect(
  mapStateToProps,
  { fetchWeather }
)(Weather)
