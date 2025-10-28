import LoginForm from './LoginForm';
import BarraInicio from "./BarraInicio"
import SingIn from "./SingIn"
import { createContext, useState } from 'react';

export const context = createContext();

function App(){
    const [view, setView] = useState(0);
    
    return(
        <>
        <context.Provider value={{ view, setView }}>
            {
            view === 0 ? (<BarraInicio />):
            view === 1 ? (<SingIn />):
            view === 2 ? (<LoginForm />):
            null
            }
        </context.Provider>    
        </>
    );
}

export default App