import React, { Component } from 'react';

class ProjectRow extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { yr, title, subtitle, detail, tag } = this.props;
    const openProps = this.state.open ? { 'data-open': true } : {};
    return (
      <div className="proj" onClick={this.toggle} {...openProps}>
        <span className="yr">{yr}</span>
        <div>
          <span className="title">
            {title}
            {subtitle && <small>{subtitle}</small>}
          </span>
          {detail && <div className="proj-detail">{detail}</div>}
        </div>
        <span className="tag">{tag}</span>
      </div>
    );
  }
}

export default ProjectRow;
