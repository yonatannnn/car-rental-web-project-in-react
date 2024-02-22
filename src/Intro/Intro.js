import React from 'react';
import car from '../images/intro-car.jpg'
import './Intro.css'
const Intro = () => {
    return ( 
        <div className="intro-container"> 
            <div className="titles">
                <h1>Drive the Experience</h1>
                <h1> Rent the Journey</h1>
                <h1>Your Destination : Your Car</h1>
            </div>
            <div className="img-container"> 
                <img src={car} alt="Intro Car"/>
            </div>
        </div>
     );
}
 
export default Intro;
