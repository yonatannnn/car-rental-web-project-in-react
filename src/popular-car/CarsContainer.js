import PopularComp from "./PopularComp";
import './CarsContainer.css'

const CarsContainer = () => {
    return ( 
        <div className="cars-container">
            <div className="title">
                <h1>Popular Cars</h1>
            </div>
            <div className="cars">
                <PopularComp model = "Toyota" price = "20" detail = "some details" />
                <PopularComp model = "Toyota" price = "20" detail = "some details" />
                <PopularComp model = "Toyota" price = "20" detail = "some details" />
                <PopularComp model = "Toyota" price = "20" detail = "some details" />
            </div>

        </div>
     );
}
 
export default CarsContainer;