import React from 'react'
import { useState } from 'react';
import "./Login.css"
import { Link, useHistory } from 'react-router-dom';
import { db, auth } from "../firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');
    const signIn = e => {
       e.preventDefault();

       auth 
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))

    }
    const register = e=> {
        e.preventDefault();
        
        auth 
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
               <img
                 className="login__logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                 alt="login_logo"
               
               ></img>
            </Link>

            <div className="login__container">
                  <h1>Sign in</h1>
                  <form>
                      <h5>E-mail</h5>
                      <input type="text" value={email} 
                      onChange = {e => setEmail(e.target.value)} />
                      
                      <h5>Password</h5>
                      <input type="text" value={password} 
                      onChange = {e => setPassword(e.target.value) } />

                      <button type="submit" onClick={signIn} className="login__container-button">Sign in</button>
                  </form>
                  
                  <p>
                  By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                  </p>
                  <button onClick={register} className="login__container-button">Create your Amazon Account</button>
                  
            </div>

        </div>
    );
}

export default Login
