import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm(){
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gmail, setGmail] = useState("");
    const [dni, setDNI] = useState("");
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
                "dni":dni,
                "age":age
            })
        });
    }
    return(
        <>
        <div>
            <form onSubmit={preventEvent}>
                <input onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <input onChange={(e) => setGmail(e.target.value)} placeholder="Gmail"></input>
                <input onChange={(e) => setDNI(e.target.value)} placeholder="DNI"></input>
                <input onChange={(e) => setAge(e.target.value)} placeholder="Age"></input>
                <button type="submit" onClick={()=>fetchData()}>submit</button>
            </form>
        </div>
        </>
    );
}

export default LoginForm;