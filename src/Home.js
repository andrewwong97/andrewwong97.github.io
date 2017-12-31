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
            <p>I'm currently a junior at Johns Hopkins University studying Computer Science.</p>
  
            <p>I grew passionate about <span className="colorful">entrepreneurship</span> in high school, when I started a custom phone case merchandising business called <a href="https://web.archive.org/web/20150815184337/http://mantiscustoms.com" className="sliding-middle-out">Mantis Customs</a>. I'm currently working as a software engineer with an awesome team at <a href="https://corriehealth.com/" className="sliding-middle-out">Corrie Health</a>, an app that tracks heart attack recovery.</p>
  
            <p>I enjoy everything tech and especially enjoy creating cool apps that can benefit others and that people enjoy to use. I started programming in high school, and I continue to use programming as a creative tool to solve problems. Now, as a <a className="sliding-middle-out" href="https://hophacks.com">HopHacks</a> organizer, I hope to create opportunities for others to build their craziest ideas with code. Lastly, I am <span className="colorful">full stack developer</span> with an eye for <span className="colorful">design</span>.</p>
  
            <p>In my free time, you can find me jamming on the acoustic or electric guitar!</p><br />
          </div>
          <div className="col-md-4 col-md-offset-4 col-xs-12 col-s-12 text-center">
            <a href="https://github.com/andrewwong97" className="icon fa fa-github fa-lg"/>
            <a href="https://linkedin.com/in/andrewwong97" className="icon fa fa-linkedin-square fa-lg" />
            <a href="https://behance.net/andrewwong97" className="icon fa fa-behance fa-lg" />
            <a href="AndrewWongTech.pdf" className="icon fa fa-file-text fa-lg" />
            <a href="mailto:wongandrew97@gmail.com" className="icon fa fa-envelope fa-lg" />
          </div>
        </div>
        <div className="projects">
          <Project color="green"
                   name="Smookify"
                   subtitle="Random music quiz app for weekly listening quizzes."
          />
          <Project color="gray"
                   name="Buzz"
                   subtitle=" A classroom tool to prioritize discussions. Made at PennApps XV."
                   btnText="Demo"
          />
        </div>
      </body>
    )
  }
}