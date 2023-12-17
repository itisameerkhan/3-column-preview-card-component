import './App.css';
import Luxury from '../images/icon-luxury.svg';
import Sedans from '../images/icon-sedans.svg';
import Suvs from '../images/icon-suvs.svg';

const App = () => {
  return (
    <div className="app-container">
      <div className="container container-1">
        <img src={Sedans} alt="" />
        <h1>SEDANS</h1>
        <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>
        <button>Learn More</button>
      </div>
      <div className="container container-2">
        <img src={Suvs} alt="" />
        <h1>SUVS</h1>
        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
        <button>Learn More</button>
      </div>
      <div className="container container-3">
        <img src={Luxury} alt="" />
        <h1>LUXURY</h1>
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default App;