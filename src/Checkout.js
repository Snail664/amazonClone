import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'


function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images-fe.ssl-images-amazon.com/images/G/65/SG-hq/2020/img/Associates_Mass_/XCM_Manual_ORIGIN_1237295_1252815_SG_content_grid_1_3225368_1500x300_en_SG.jpg' />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one click
                            "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout__title'>Your Shopping basket</h2>

                        {basket?.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                )
                }
            </div>
            {basket.length > 0 && (
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
};


export default Checkout;