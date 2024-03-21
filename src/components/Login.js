import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const[isSignInForm, setIsSignInForm]= useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bgImage"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="text-bold py-4 text-3xl  w-full">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full  bg-gray-700 bg-opacity-80"></input>}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full  bg-gray-700 bg-opacity-80"></input>
        <input type="text" placeholder="Password" className="p-4 my-4 w-full  bg-gray-700 bg-opacity-80" />
        <button className=" my-4 bg-red-700 w-full rounded-lg h-10 "> {isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer " onClick={toggleSignUpForm}> {isSignInForm ? "New to Netflix? Sign Up here" : "Already Registered? Sign-In To Enjoy"}</p>
        <p className="py-4">This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
      </form>
    </div>
  );
};

export default Login;
