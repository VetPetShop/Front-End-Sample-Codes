import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SignUp=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
const navigate = useNavigate();

useEffect(()=>{
  const auth = localStorage.getItem("user");
  if(auth)
  {
    navigate("/")
  }
})
    const collectData = async () => {
        // Create an object containing the data to be sent to the server
        const data = {
          name: name,
          email: email,
          password: password,
        };
    
        // Make an HTTP POST request to your Express backend
        let result =await fetch("http://localhost:5000/addusers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        result=await result.json()
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/")
      };
    
    
    return(
    <div className="signUp">
        <h1 className="register">Register</h1>
        <input className="inputBox" type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}/>


        <input className="inputBox" type="email" placeholder="Enter email id" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input className="inputBox" type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="button" className="signupButton" onClick={collectData}>Sign up</button>

    </div>
    )
    }
export default SignUp;