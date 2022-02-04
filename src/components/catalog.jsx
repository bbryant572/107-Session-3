import {useEffect, useState} from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    const loadData = () => {

        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    };

    useEffect(() => {
        loadData();
    });

    return (
        <div className="catalog">
            <h3>Our amazaing catalog</h3>
            <h5>There are {products.length} products</h5>

            {products.map((p) => (
            <Product key={p._id} data={p} /> ))}
        </div>
    );
};

export default Catalog;