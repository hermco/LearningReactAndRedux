import React, {Component} from 'react';

class GoogleMap extends Component {
  componentDidMount() { //always called when the component has rendered on the screen
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
      return (
        <div ref="map" /> //this.refs.map
      );
  }
}

export default GoogleMap;
