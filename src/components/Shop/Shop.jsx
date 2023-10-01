import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Shop.css';
import OrderSummary from "../OrderSummary/OrderSummary";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
    const products = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product)=>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const handleClearCart = ()=>{
       setCart([]);
    }

    // console.log(cart);

    // console.log(products)

    return (
        <div className="shop">
            <div className="products-container">
                `<div className="products">
                    {
                        products.map(product => <Product handleAddToCart = {handleAddToCart} key={product.id} product={product}></Product>)
                    }
                </div>`
            </div>
            
            <OrderSummary cart={cart} handleClearCart={handleClearCart}></OrderSummary>

        </div>
    );
};

export default Shop;