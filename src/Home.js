import React, {Component} from 'react';
import Project from './Project';

export default class Home extends Component {
  render() {
    return (
      <body>
        <div id="about">
          <div className="col-md-3 col-xs-12">
            <div className="circle"><img src="profile.jpeg" /></div>
          </div>
          <div className="col-md-9 col-xs-12">
            <h1>Hi, my name is Andrew!</h1>
            <h2>Welcome to my page!</h2><br />
            <p>
                I'm currently a senior at Johns Hopkins University studying Computer Science and a <a className="sliding-middle-out" href="https://hophacks.com">HopHacks</a> organizer!
                I'm a full stack software engineer with an interest in software architecture and systems.
            </p>
            <p>
                Currently looking for a position in a mid sized tech firm.
                Please reach out if you think there's a fit!
            </p>
          </div>
          <div className="col-md-4 col-md-offset-4 col-xs-12 col-s-12 text-center">
            <a href="https://github.com/andrewwong97" className="icon fa fa-github fa-lg"/>
            <a href="https://linkedin.com/in/andrewwong97" className="icon fa fa-linkedin-square fa-lg" />
            <a href="https://behance.net/andrewwong97" className="icon fa fa-behance fa-lg" />
            <a href="Andrew-Resume.pdf" className="icon fa fa-file-text fa-lg" />
            <a href="mailto:wongandrew97@gmail.com" className="icon fa fa-envelope fa-lg" />
          </div>
        </div>
        <div className="projects">
            <Project name="Corrie Health"
                     subtitle="Patient Management Tools for Heart Attack Discharge and Recovery"
                     btnText="Website"
                     siteLink="https://corriehealth.com/"
                     style={{backgroundColor: "#2369ea"}}
            />
        </div>
        <div className="projects" style={{margin:0}}>
            <Project name="Semester.ly"
                     subtitle="Improving Course Registration: SIS Add to Cart and Advisor Portal"
                     btnText="Project Page"
                     siteLink="http://www.dsn.jhu.edu/courses/cs310/jhu/"
                     style={{backgroundColor: "#27ae60"}}
            />
        </div>
        <div className="projects" style={{margin:0}}>
            <Project name="Smookify" subtitle="Music quiz app for weekly listening quizzes."
                     style={{backgroundColor: "#2c3e50"}}
            />
            <Project name="HopHacks"
                     subtitle="HopHacks website and registration system."
                     btnText="Website"
                     siteLink="https://hophacks.com/"
                     style={{backgroundColor: "#2d3d85"}}
            />
            <Project name="Buzz"
                     subtitle=" A classroom tool to prioritize discussions."
                     btnText="Demo"
                     style={{backgroundColor: "#f1c40f"}}
            />
        </div>
      </body>
    )
  }
}