import React, { use, useContext } from "react";
import "./LoginForm.css"
import { useState } from "react";
import { context } from "./App";

function fetchData(gmail, password, setIdentifyer){
    fetch("http://localhost:5000/singin",{
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify({gmail,  password})
    })
    .then(res => (res.json()))
    .then(body => ((setIdentifyer(body["identifyer"]))))
}

function SingIn(){
    const [identifyer, setIdentifyer] = useState(0)
    const {view, setView} = useContext(context)
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
        <button onClick={() => {setView(0)}}>atras</button>
        <div className="padre">
            <div className="padreLog">
                <p className="inputLog">{identifyer === 0 ? "el usuario no coincide con la contraseña" : null}</p>
                <form className="formLog" onSubmit={(e) => e.preventDefault()}>
                    <input className="inputLog" placeholder="Gmail" onChange={(e) => {setGmail(e.target.value)}}></input>
                    <input className="inputLog" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}></input>
                    <button onClick={() => {fetchData(gmail, password, setIdentifyer)}}>submit</button>
                </form>
            </div>
        </div>
        
        </>
    );
}

export default SingIn