import React, { useContext } from "react";
import "./LoginForm.css"
import { useState } from "react";
import { context } from "./App";

function fetchData(name, password){
    fetch("http://localhost:5000/singin",{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({name,  password})
    })
}

function SingIn(){

    const {view, setView} = useContext(context)
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
        <button onClick={() => {setView(0)}}>atras</button>
        <div className="padre">
            <div className="padreLog">
                <form className="formLog" onSubmit={(e) => e.preventDefault()}>
                    <input className="inputLog" placeholder="Name" onChange={(e) => {setName(e.target.value)}}></input>
                    <input className="inputLog" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}></input>
                    <button onClick={() => {fetchData(name, password)}}>submit</button>
                </form>
            </div>
        </div>
        
        </>
    );
}

export default SingIn