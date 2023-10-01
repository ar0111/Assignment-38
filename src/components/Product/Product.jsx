import { BiCartAdd } from 'react-icons/bi';
import './Product.css'

// eslint-disable-next-line react/prop-types
const Product = ({product, handleAddToCart}) => {
    console.log(product)
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {img, name, price, seller, ratings} = product;
    return (
        <div className='product'>
            <div>
                <div className="images">
                    <img className='product-img' src={img} alt=''/>
                </div>
                
                <h5 className='product-title'>{name}</h5>
                <h2 className='product-price'>Price: ${price}</h2>
            </div>
            <div className='product-btn-container'>
                <p className='product-seller'>Manufacturer: {seller}</p>
                <p className='product-ratings'>Rating: {ratings} Star</p>
                <button className='product-btn' onClick={()=> handleAddToCart(product)}>Add To Cart <BiCartAdd></BiCartAdd></button>
            </div>
        </div>
    );
};

export default Product;