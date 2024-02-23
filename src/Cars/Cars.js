import './Cars.css'
import SingleCar from './SingleCar';
const Cars = () => {
    return ( 
        <div className="Card">
            <h1>Available Cars</h1>
            <div className="car-box">
                <SingleCar make = "Toyota" seatCapacity = "5" fuelType = "Diesel" price = "20" />
                <SingleCar make = "Toyota" seatCapacity = "5" fuelType = "Diesel" price = "20" />
                <SingleCar make = "Toyota" seatCapacity = "5" fuelType = "Diesel" price = "20" />
                <SingleCar make = "Toyota" seatCapacity = "5" fuelType = "Diesel" price = "20" />
                <SingleCar make = "Toyota" seatCapacity = "5" fuelType = "Diesel" price = "20" />
                <SingleCar make = "Toyota" seatCapacity = "5" fuelType = "Diesel" price = "20" />
            </div>

        </div>
     );
}
 
export default Cars;