import React, { useContext, useState } from "react";
import "./LoginForm.css";
import { context } from "./App";

function LoginForm(){
    const {view, setView} = useContext(context);
    const [responseStatus, setResponseStatus] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gmail, setGmail] = useState("");
    const [age, setAge] = useState("");
    const preventEvent = (e) => {e.preventDefault()}
    const fetchData = () => {
        fetch("http://localhost:5000",{
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify({
                "name":name,
                "password":password,
                "gmail":gmail,
                "age":age
            })
        })
        .then(res => (setResponseStatus(res.status === 500 ? "ese usuario ya esta registrado" : "")))
    }
    return(
        <>
        <button onClick={() => {setView(0)}}>atras</button>
        <div className="padre">
            <div className="padreLog">
                <p className="inputLog">{responseStatus}</p>
                <form onSubmit={preventEvent} className="formLog">
                    <input className="inputLog" onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
                    <input className="inputLog" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                    <input className="inputLog" onChange={(e) => setGmail(e.target.value)} placeholder="Gmail"></input>
                    <input className="inputLog" onChange={(e) => setAge(e.target.value)} placeholder="Age"></input>
                    <button type="submit" onClick={()=>fetchData()}>submit</button>
                </form>
            </div>
        </div>
        
        </>
    );
}

export default LoginForm;