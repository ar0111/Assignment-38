/* eslint-disable react/prop-types */
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineArrowRight } from 'react-icons/ai';
import "./OrderSummary.css";

// eslint-disable-next-line react/prop-types
const OrderSummary = ({cart, handleClearCart}) => {
    let total = 0;
    let shipping = 0;

    for(const product of cart){
        // console.log(product);
        // quantity += product.quantity;
        total += product.price * product.quantity;
        shipping += product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + tax + shipping;



    return (
        <div className="order-summary">
            <h1>Order Summary</h1>
            <h3>Selected Items: {cart.length} </h3>
            <h3>Total Price: ${total}</h3>
            <h3>Total Shipping Charge: ${shipping}</h3>
            <h3>Tax: ${tax}</h3>
            <h2>Grand Total: ${grandTotal}</h2>
            <button onClick={()=>handleClearCart()}>Clear Cart <RiDeleteBinLine></RiDeleteBinLine></button>
            <button>Review Order <AiOutlineArrowRight></AiOutlineArrowRight></button>
        </div>
    );
};

export default OrderSummary;