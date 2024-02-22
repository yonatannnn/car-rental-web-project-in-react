import './App.css';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import PopularComp from './popular-car/PopularComp';

function App() {
  return (
    <div>
      <PopularComp model = "Toyota" price = "20" detail = "some details" />
    </div>
  );
}

export default App;
