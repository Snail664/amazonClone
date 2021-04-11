import React from 'react'
import Checkout from './Checkout'
import Rating from '@material-ui/lab/Rating'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    console.log(id, title, image, price, rating);
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    };

    return (
        <div className='checkoutProduct'>
            <img className='checkout__image' src={image} />
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <Rating value={rating} />
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
};

export default CheckoutProduct;