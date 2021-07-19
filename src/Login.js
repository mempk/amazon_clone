import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import './login.css';

function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (event )=>{
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => { 
           history.push("/");
        })
        .catch(e =>alert(e.message))
    }

    const register =(event)=>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => { 
            history.push("/");
        })
        .catch(e =>alert(e.message))
    }
    
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
        />
      </Link>
  
    <div className="login_container">
        <h1>Sign In</h1>
        <form>

        <h5>E-Mail</h5>
        <input onChange={event => setEmail(event.target.value)}  value={email} type="text"/>
        <h5>Password</h5>
        <input  onChange={event => setPassword(event.target.value)}  value={password}type="text"/>
        <button className ="login_button_signin" onClick={login}>Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button className ="login_button_create" onClick={register}> Create your Amazon account</button>
        

    </div>
    </div>
  );
}

export default Login;
