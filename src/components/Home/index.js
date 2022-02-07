import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
      <section className="title-home">
        <h1 id="home">Hi, I'm Hector.</h1>
  <h3 class="lead">Full stack developer based in Miami, Florida.</h3>
  <hr class="my-4"></hr>
  <p class="lead">
    <a  class="btn btn-primary btn-lg" href="/work" role="button">
    <Link exact to='work' className="link-edit">View Projects</Link>
    </a>
  </p>
      </section>
    );
  }
  
  export default Home;