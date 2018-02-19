import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/chart";
import GoogleMap from '../components/gmap';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(details => (details.main.temp-273.15));
    const pressure = cityData.list.map(details => details.main.pressure);
    const humidity = cityData.list.map(details => details.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        <td> <GoogleMap lon={lon} lat={lat} /> </td>
        <td>
          <Chart data={temps} color="orange" units="°C"/>
        </td>
        <td>
          <Chart data={pressure} color="blue" units="hPa"/>
        </td>
        <td>
          <Chart data={humidity} color="red" units="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

//function mapStateToProps(state) { //
function mapStateToProps({ weather }) { //
  // const weather = state.weather; //previous line is equivalent to that
  return { weather }; // it allows us to write this : its more efficient
}

export default connect(mapStateToProps,null)(WeatherList);
