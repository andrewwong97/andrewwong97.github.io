import React, { Component } from 'react';

export default class Venmo extends Component {
  componentWillMount() {
    window.onload = function() {
      window.location.replace("https://venmo.com/andrewwong97")
    }
  }
  render() {
    return (
      <div className="Venmo" />
    )
  }
}