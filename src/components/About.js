import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium has-text-white">Brewer and aspiring Full Stack Developer</p>
      <hr />
      <img className="profile-picture" src={process.env.PUBLIC_URL + '/img/IMG_3293.PNG'} alt="Brandon Sauer"/>
      <p className="content has-text-white mt-4">
        My name is Brandon Sauer and i'm studying to become a Full Stack Developer. 
      </p>
      <p className="content has-text-white">
        I'm currently enrolled in the UC Davis Full Stack Developer bootcamp and am hoping to make a career out of it. 
      </p>
    </div>
  );
}

export default About;