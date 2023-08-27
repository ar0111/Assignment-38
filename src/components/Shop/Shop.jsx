import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // console.log(products)

    return (
        <div className="shop">
            <div className="products-container">
                `<div className="products">
                    {
                        products.map(product => <Product key={product.id} product={product}></Product>)
                    }
                </div>`
            </div>
            <div className="order-summary">
                <h1>Order Summary</h1>
                <h3>Selected Items: 6</h3>
                <h3>Total Price: $1140</h3>
                <h3>Total Shipping Charge: $5</h3>
                <h3>Tax: $114</h3>
                <h2>Grand Total: $1559</h2>
                <button>Clear Cart <RiDeleteBinLine></RiDeleteBinLine></button>
                <button>Review Order <AiOutlineArrowRight></AiOutlineArrowRight></button>
            </div>
        </div>
    );
};

export default Shop;