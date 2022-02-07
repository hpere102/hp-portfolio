import React from 'react';
import ResumeImage from '../../assets/resume/resume.png';


function Resume() {
    return (
        <section className="about-resume-cont">
        <div className="resume">
          <div className="bio-resume-title">
          <h1 id="about">Resume</h1>
          <hr class="my-4"></hr>
          <p class="lead"></p>
          </div>
          <p class="lead"> </p>
          <a href="resume.pdf" target="_blank" class="btn btn-primary btn-md" role="button" download>Download my Resume!</a>
        </div>
        <div className="bio-resume-img">
        <img className="resume-img" src={ResumeImage} />
        </div>
      </section>
      
    );
  }
  
  export default Resume;