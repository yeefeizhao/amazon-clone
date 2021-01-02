import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        //remove item from cart
        dispatch({
            type: 'DELETE',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img class="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromCart}>Delete</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
