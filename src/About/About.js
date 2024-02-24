import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// ... rest of the component


const About = () => {
    return (
      <div id="timeline" className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <div className="event">
              <h2>Established</h2>
              <p>Our journey began in <strong>2010</strong> with a vision to...</p>
            </div>
          </div>
  
          <div className="col-lg-6">
            <div className="event">
              <h2>Growth Phase</h2>
              <p>Experienced rapid growth in <strong>2015</strong> with...</p>
            </div>
          </div>
        </div>
  
        <div className="row">
          <div className="col-lg-6">
            <div className="event">
              <h2>Expansion</h2>
              <p>Opened new branches in <strong>2018</strong> to serve a wider...</p>
            </div>
          </div>
  
          <div className="col-lg-6">
            <div className="event">
              <h2>Present</h2>
              <p>Continuing to innovate and provide exceptional...</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
