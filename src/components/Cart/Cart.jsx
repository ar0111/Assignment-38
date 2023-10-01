import { useLoaderData } from "react-router-dom";

const Cart = () => {

    const products = useLoaderData();
    const product = products.slice(0, 5);

    return (
        <div className="p-40">
            {
                product.map(product => <div className="my-10 border border-indigo-600 rounded-lg w-2/6" key={product.id}>
                    <div className="flex justify-start items-center">
                        <div>
                            <img className="w-20 rounded-lg" src={product.img} alt="" />
                        </div>
                        <div className="ms-10">
                            <h4>{product.name}</h4>
                            <p>Price : {product.price}$</p>
                            <span>Rating : {product.ratings} Star</span>
                        </div>
                        {/* <button onClick={() => addToCart(product)}>Add To Cart</button> */}
                    </div>
                    
                </div>
                )
            }
        </div>
    );
};

export default Cart;