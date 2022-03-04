import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        {
          id: "ReactJS_skill",
          content: "React.js",
          porcentage: "95%",
          value: "80"
        },
        {
          id: "VueJS_skill",
          content: "Vue.js",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "NodeJS_skill",
          content: "Node.js",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "CorePHP_skill",
          content: "CorePHP",
          porcentage: "80%",
          value: "80"
        },
        { id: "Laravel_skill", content: "Laravel", porcentage: "70%", value: "70" },
        {
          id: "magento_skill",
          content: "Magento",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          porcentage: "85%",
          value: "85"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            `I am a full-stack web developer with over 10 years of experience.`
        },
        {
          id: "second-p-about",
          content:
            `As an experienced full-stack developer, I used many kinds of frontend and backend languages and frameworks. For frontend development, I often used
            Javascript libraries such as react.js, vue.js and angular.js and core HTML5, CSS3, Javascript, JQuery using my own styles or some other already defined
            styles such as bootstrap.`
        },
        {
          id: "third-p-about",
          content:
            "For backend development, I often used node.js and other PHP frameworks such as Laravel and for database I used mysql, sqlserver, postgresql and mongodb."
        },
        {
          id: "fourth-p-about",
          content:
            `I have a huge interest and deep knowledge in e-commerce and blockchain and already developed many sites using MERN stack, Magento and Wordpress.
            I love to design, build and maintain such huge sites..`
        },
        {
          id: "fifth-p-about",
          content:
            `I love cooperative work and want to know more and more friends so that we can discuss and help each other and share knowledges.
            Please contact me if you think I am the man for your work or if you want a good and kind friend.
            Thank you.`
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
