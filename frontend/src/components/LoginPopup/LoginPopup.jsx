/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/Context";
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {

  const {url, setToken} = useContext(StoreContext);
  
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "", 
    password: ""
  })

  const onChangeHandler = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [inputName]:value}))
  }

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    (currState === "Login") ? newUrl += "/api/user/login" : newUrl += "/api/user/register";

    const res = await axios.post(newUrl, data);
    if(res.data.success){
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setShowLogin(false);
    }
    else{
      alert(res.data.message);
    }
  }

  return (
    <div className="login-popup">
      <form onSubmit={onLogin}className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="Your name" required />
          )}
          <input type="email" name="email" onChange={onChangeHandler} value={data.email}placeholder="Your email" required />
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Password" required />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
