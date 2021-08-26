import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
    
    const [{basket, user, profile}] = useStateValue();

    const handldeAuthentication = () => {
      if(user){
        auth.signOut();
      }
    }
    
  const [address, setAddress] = useState('')

  const login = () => {
    if (user)
      auth.signOut();
  };

  useEffect(() => {
    const URL = 'https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91';
    fetch(URL)
      .then(res => res.json())
      .then(data => setAddress(data));

  }, [])

  return (
    <nav className="header">
      <div className="header__top">
       
        {/* Logo on left */}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        {/* Address */}
        <div className="header__address">
          <div className="header__address-icon">
            <RoomOutlinedIcon />
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">{address?.city}({address?.country_code})</span>
          </div>
        </div>


        {/* Search box */}
        <div className="header__search">
          <input type="search" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

         {/*flag*/}
        <div className="header__flag"></div>

        {/* 3 Links */}
        <div className="header__nav">
          {/* Link 1 - SignIn/SignOut */}
          {user ? (
            <Link to="/" className="header__link">
              <div onClick={handldeAuthentication} className="header__option">
                <span className="header__optionLineOne">
                  Hello, {user ?user.email : "Guest"}
                </span>
                <span className="header__optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
          ) : (
              <Link to="/login" className="header__link">
                <div onClick={handldeAuthentication} className="header__option">
                  <span className="header__optionLineOne">
                    Hello, {user ? profile?.userName : "Guest"}
                  </span>
                  <span className="header__optionLineTwo">
                    {user ? "Sign Out" : "Sign In"}
                  </span>
                </div>
              </Link>
            )}
          {/* Link 2 - Return Order */}
          <Link to="/orders" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Return</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          {/* Link 3 - Prime */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Try</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          {/* Link 4 - Profile */}
          <Link to="/profile" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Profile</span>
            </div>
          </Link>
          {/* Basket*/}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              {/* Shopping Basket Icon*/}
              <ShoppingCartIcon />
              {/* Number of items in basket */}
              <span className="header__optionLineTwo basket__count">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>


      <div className="header__bottom">
        
        
        {/* Nav */}
        <div className="header__bottom-nav">
        
        <span>
          <Link to="/" className="header__link">
               <MenuIcon />
          </Link>
         </span>

          <span>
          <Link to="/" className="header__link">
            
              All Products
          </Link>
          </span>
          
          <span>
            <Link to="/" className="header__link">
              Bestseller
            </Link>
          </span>
          <span>
            <Link to="/" className="header__link">
              Today's Deals
            </Link>
          </span>
          <span>
            <Link to="/" className="header__link">
              Smartphone
            </Link>
          </span>
          <span>
            <Link to="/" className="header__link">
              Computers
            </Link>
          </span>
          <span>
            <Link to="/" className="header__link">
              Electronics
            </Link>
          </span>
         
          <span>
            <Link to="/" className="header__link">
              Prime
            </Link>
          </span>
          <span>
            <Link to="/products" className="header__link">
              Pantry
            </Link>
          </span>
         
         
        </div>
        
        {/* Advt */}
        <div className="header__bottom-app">
        
        <Link to="/" className="amazon__res" >
         <p >Amazon's response to COVID-19</p>
         </Link>

        </div>
       
      </div>
    </nav>
  );
}

export default Header;
