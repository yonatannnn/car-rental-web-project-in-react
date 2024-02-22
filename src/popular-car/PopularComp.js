import car from '../images/no-background.png'
import '../popular-car/PopularComp.css'

const PopularComp = (props) => {
    return ( 
        <div className="comp-container">
            <div className="car-pic">
                <img src = {car} />
            </div>
            <div className="detail">
                <p className="model"> model : {props.model}</p>
                <p className="price"> price : {props.price} ETB</p>
                <p className="detail">{props.detail}</p>
            </div>
        </div>
     );
}
 
export default PopularComp;