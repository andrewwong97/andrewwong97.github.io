import React, { Component } from 'react';

export default class AtlassianReferral extends Component {
  componentDidMount() {
    window.onload = function() {
      window.location.replace("https://forms.gle/uFzEehctb9FYVedA7")
    }
  }
  render() {
    return (
      <div className="AtlassianReferral" />
    )
  }
}