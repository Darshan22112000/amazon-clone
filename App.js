import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from "./Components/Checkout";
import { auth } from "./firebase"


function App() {
const [{},dispatch] = useStateValue();

useEffect(() => {
 
    auth.onAuthStateChanged(authUser =>{
      console.log("the user is a >>>",authUser);
    
      if(authUser){
         //the user logged in
         dispatch({
           type : 'SET_USER',
           user : authUser
         })
      }else{
        //the user is logged out
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }

    })
}, [])

  return(
    <Router>
    
    <div className="App">
      <Switch>
        
        <Route path="/checkout">
        <Header />
          <Checkout />
        <Footer />  
        </Route>
        
        <Route path="/login">
        <Header />
          <Login />
          <Footer /> 
        </Route>

        <Route path="/profile">
        <Header />
          <Profile />
          <Footer /> 
        </Route>
        
        <Route path="/">
          <Header />
          <Home />
          <Footer /> 
        </Route>
        
      </Switch>
    </div>
  
  </Router>
  );
}

export default App;
