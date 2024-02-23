import car from '../images/no-background.png'
import './SingleCar.css'

const SingleCar = (props) => {
    return ( 
        <div className="car-container">
            <div className="img-container">
                <img src = {car} alt = "car" />
            </div>
            <div className="info">
                <p>Make : {props.make}</p>
                <p>Seat Capacity : {props.seatCapacity}</p>
                <p>fuelType : {props.fuelType}</p>
            </div>
            <div className='price'>
                <p>{props.price} ETB</p>
                <button>Rent</button>
            </div>
        </div>
     );
}
 
export default SingleCar;