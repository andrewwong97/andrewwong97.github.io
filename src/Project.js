import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color || 'green',
      btnText: this.props.btnText || 'Try it',
      href: this.props.name ? this.props.name.toLowerCase() : ''
    }
  }

  render() {
    return (
      <div className={`${this.state.color} rectangle`}>
        <h1 className="title">{this.props.name}</h1>
        <h3 className="subtitle">{this.props.subtitle}</h3>
        <a href={`http://awong.io/${this.state.href}`}>
          <button className="btn-more">{this.state.btnText}</button>
        </a>
      </div>
    )
  }
}

Project.propTypes = {
  color: PropTypes.string, // defaults to green
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  btnText: PropTypes.string
};

export default Project;
