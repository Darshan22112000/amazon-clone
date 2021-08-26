import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function Checkout() {

    const [{basket, user}] = useStateValue();
    
    return (
        <div className="checkout">
            <Link to="/" >
            <img 
            className="checkout__ad" 
            src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png" 
            /> 
            </Link>

            <div className="checkout__inner">

                <div className="checkout__left">

            {basket?.length === 0 ? (
            <div>
                <h4 className="checkout__title">{ user  ?user.email : "Guest"}</h4>
                <h2 className="checkout__title">Your Amazon Cart is currently empty.</h2>
            </div>
        ) : (
                <div>

                    <h4 className="checkout__title">{ user  ?user.email : "Guest"}</h4> 
                    <h2 className="checkout__title">Cart Items :</h2>

                    {basket.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        
                        />
                    ))}
                    
                </div>

        )}
        
        
            </div>
            {basket.length > 0 && ( 
                <div className="checkout__right"> 
                
                    <Subtotal />
                </div>
            )}
        

            </div>

            
        
        </div>
    );
}

export default Checkout
