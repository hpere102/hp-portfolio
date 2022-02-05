import React from 'react';
import Cat from '../../assets/bio-img/cat-1.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';



function About() {
  return (
    <section className="about-resume-cont">
        <div className="bio-resume">
          <div className="bio-resume-title">
          <h1 id="about">About Me</h1>
          <hr class="my-4"></hr>
          <p class="lead"></p>
          </div>
          <p class="lead">My name is Hector Perez and i am a full stack </p>
        </div>
        <div className="bio-resume-img">
        <img className="cat-resume-img" src={Cat} />
        </div>
      </section>
  );
}

export default About;