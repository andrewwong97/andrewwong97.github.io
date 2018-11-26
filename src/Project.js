import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnText: this.props.btnText || 'Try it',
      link: this.props.siteLink ? this.props.siteLink : 'http://awong.io/' + this.props.name ? this.props.name.toLowerCase() : ''
    };
  }

  render() {
    return (
      <div className="project-box">
        <h1 className="title">{this.props.name}</h1>
        <h3 className="subtitle">{this.props.subtitle}</h3>
        <a href={this.state.link}>
          <button className="btn-more">{this.state.btnText}</button>
        </a>
      </div>
    )
  }
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  btnText: PropTypes.string,
  siteLink: PropTypes.string,
};

export default Project;
