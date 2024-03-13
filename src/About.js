import React from "react";

function About() {
  return (
    <section id="about">
      <div id="parentcontainer">
        <h2>About Me</h2>
        <br />
        <p>
          Hello! My name is Juan, and I'm an undergraduate student currently pursuing a degree in Marketing. Alongside my studies, I've developed a passion for front-end development. What started as a curiosity has blossomed into a full-fledged interest, and I've been actively honing my skills in this area.
        </p>
        <br />
        <p>
          Outside of the digital world, I'm an avid soccer enthusiast. Whether it's playing with friends or watching matches, soccer has always been a significant part of my life. I find joy in the excitement that the sport brings.
        </p>
        <br />
        <p>
          I'm excited about the opportunities that lie ahead and look forward to leveraging my skills and experiences to make a positive impact in the world. Let's connect and explore possibilities together!
        </p>
        <div className="codelogo">
          <h3>Skills:</h3>
          <i className="fa-brands fa-js" style={{ color: '#74C0FC' }}></i>
          <i className="fa-brands fa-html5" style={{ color: '#ff0000' }}></i>
          <i className="fa-brands fa-css3-alt" style={{ color: '#63E6BE' }}></i>
          <i className="fa-brands fa-python" style={{ color: '#9d96b0' }}></i>
        </div>
      </div>
    </section>
  );
}

export default About;