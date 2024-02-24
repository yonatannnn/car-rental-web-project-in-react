import About from './About/About';
import './App.css';
import Cars from './Cars/Cars';
import SingleCar from './Cars/SingleCar';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import CarsContainer from './popular-car/CarsContainer';
import PopularComp from './popular-car/PopularComp';

function App() {
  return (
    <div className='main'>
      <div className='Header-Intro'>
          <div className='header'>
            <Header />
          </div>
          <div className='intro'>
            <Intro />
          </div>
      </div>
      <div className='rent'>
        <div className='cars'> 
          <Cars />
        </div>
        <div className='CarContainer'>
          <CarsContainer />
        </div>
      </div>
      <div>
        <About></About>
      </div>
    </div>
  );
}

export default App;
