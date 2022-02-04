
import "./product.css";
import QuantityPicker from "./quantityPicker";
import "../services/dataService.js";

const Product = (props) => {

    return(
        <div className="product">
            <img src={"/images/" + props.data.img} alt="Product" />
            <h5 className="title-name">{props.data.title}</h5>

            <div className="price-info">
                <label className="total">$10.00</label>
                <label className="Price">${props.data.price}</label>
            </div>

            <QuantityPicker />

            <button className="btn btn-sm btn-primary">Add to 🛒</button>
        </div>
    );
};

export default Product;