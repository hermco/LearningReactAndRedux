import React, { Component } from 'react';
import { fetchWeather } from '../actions/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }

  render() {
    /*if(this.props.response != [])
      console.log(this.props.response[0].city);*/
    return (
      <form onSubmit= { this.onFormSubmit } className="input-group">
        <input
          placeholder="Get a five a day forecast in your fav cities!"
          className="form-control"
          value={this.state.term}
          onChange={ this.onInputChange }
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary" >Submit</button>
        </span>
      </form>

    );
  }

}

// w/e is returned ends up as a prop in the object CONNECTED to this function
function mapStateToProps(state) { //state is a global state managed by reducers, specifically the root reducer
  return {
    weather: state.weather // in a way, we're kinda subscribing to the response element in our global state
  };
}

// w/e is returned ends up as a prop in the object CONNECTED to this function
function mapDispatchToProps(dispatch) { //dispatch allows the action executed to be DISPATCHED to all the reducers
  return bindActionCreators ({ fetchWeather }, dispatch); //whenever selectBook is called (upon selection), the action associated here is called
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
