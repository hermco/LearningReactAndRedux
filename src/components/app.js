import React, { Component } from 'react';

import SearchBar from '../containers/searchbar.js';
import WeatherList from '../containers/weather_list.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
