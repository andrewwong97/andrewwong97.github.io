import React, { Component } from 'react';

export default class Venmo extends Component {
  componentDidMount() {
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