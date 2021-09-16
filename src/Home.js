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
                I'm currently a software engineer at Atlassian interested in product development and cloud systems! Feel free to connect below.</p>
            <div className="social-links">
	            <a href="https://github.com/andrewwong97" className="icon fa fa-github fa-lg"/>
	            <a href="https://linkedin.com/in/andrewwong97" className="icon fa fa-linkedin-square fa-lg" />
	            <a href="https://behance.net/andrewwong97" className="icon fa fa-behance fa-lg" />
	            <a href="Andrew-Resume.pdf" className="icon fa fa-file-text fa-lg" />
	            <a href="mailto:wongandrew97@gmail.com" className="icon fa fa-envelope fa-lg" />
	          </div>
          </div>
        </div>
        <div className="projects">
            <Project name="Corrie Health"
                     subtitle="Patient Management Tools for Heart Attack Discharge and Recovery"
                     btnText="Website"
                     siteLink="https://corriehealth.com/"
                     style={{backgroundColor: "#2369ea", color: "#fafafa"}}
            />
        </div>
        <div className="projects" style={{margin:0}}>
            <Project name="Semester.ly"
                     subtitle="Improving Course Registration: SIS Add to Cart and Advisor Portal"
                     btnText="Project Page"
                     siteLink="http://www.dsn.jhu.edu/courses/cs310/jhu/"
                     style={{backgroundColor: "#27ae60", color: "#fafafa"}}
            />
            <Project name="Cloud Computing (CS 419)"
                     subtitle="Caching vs. Database Replication Strategies in Chained MR Jobs"
                     btnText="Project Page"
                     siteLink="http://awong.io/cloud-computing"
                     style={{backgroundColor: "#D2DBFF", color: "#3f3f3f"}}
            />
        </div>
        <div className="projects" style={{margin:0}}>
            <Project name="Smookify" subtitle="Music quiz app for weekly listening quizzes."
                     style={{backgroundColor: "#2c3e50", color: "#fafafa"}}
            />
            <Project name="HopHacks"
                     subtitle="HopHacks website and registration system."
                     btnText="Website"
                     siteLink="https://hophacks.com/"
                     style={{backgroundColor: "#2d3d85", color: "#fafafa"}}
            />
            <Project name="Buzz"
                     subtitle=" A classroom tool to prioritize discussions."
                     btnText="Demo"
                     style={{backgroundColor: "#f1c40f", color: "#fafafa"}}
            />
        </div>
      </body>
    )
  }
}