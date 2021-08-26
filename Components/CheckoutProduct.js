import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./../StateProvider";
import StarIcon from '@material-ui/icons/Star';

function CheckoutProduct({id,title,price,rating,image}) {
const [{basket},dispatch] = useStateValue();

const removeFromBasket = () => {

        dispatch({
            type : "REMOVE_FROM_BASKET",
            id : id,
        });
} 

return (
    <div className="checkout__Product">
        <img src={image}></img>

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>

            <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
            {
                Array(rating)
                .fill()
                .map((_,i) =>(
                    <p><StarIcon /></p>
                ))
            }    
        </div> 
        <button onClick={removeFromBasket}>Remove from Cart</button>  
    </div>            
    </div>
)
}

export default CheckoutProduct
