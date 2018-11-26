import React, {Component} from 'react';
import Project from './Project';

export default class Home extends Component {
  render() {
    return (
      <body>
        <div id="about">
          <div className="col-md-3 col-xs-12">
            <div className="circle"><img src="prof_sm.jpg" /></div>
          </div>
          <div className="col-md-9 col-xs-12">
            <h1>Hi, my name is Andrew!</h1>
            <h2>Welcome to my page!</h2><br />
            <p>
                I'm currently a senior at Johns Hopkins University studying Computer Science and a <a className="sliding-middle-out" href="https://hophacks.com">HopHacks</a> organizer!
            </p>
            <p>
                I'm a full stack software engineer with an interest in software architecture and systems.
                I have a desire to be different, whether it is providing unique design and engineering perspective
                in software projects or developing personal style through hip-hop dance.
            </p>
            <p>
                Currently looking for a position in a mid size tech firm of 100-500 engineering team.
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
          <Project name="Smookify" subtitle="Random music quiz app for weekly listening quizzes." />
        </div>
        {/*<div className="projects">*/}
          {/*<Project color="green"*/}
                   {/*name="Smookify"*/}
                   {/*subtitle="Random music quiz app for weekly listening quizzes."*/}
          {/*/>*/}
          {/*<Project color="blue"*/}
                   {/*name="HopHacks"*/}
                   {/*subtitle="HopHacks website and registration system."*/}
                   {/*btnText="Website"*/}
                   {/*siteLink="https://hophacks.com/"*/}
          {/*/>*/}
          {/*<Project color="gray"*/}
                   {/*name="Buzz"*/}
                   {/*subtitle=" A classroom tool to prioritize discussions. Made at PennApps XV."*/}
                   {/*btnText="Demo"*/}
          {/*/>*/}
        {/*</div>*/}
      </body>
    )
  }
}