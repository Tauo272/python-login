import { useContext } from 'react';
import { context } from './App';
import './BarraInicio.css';

function BarraInicio(){
    const {view, setView} = useContext(context);
    return(
    <>
    <nav className='barra'>
        <div className='barra1'>
            <a onClick={() => {setView(1)}}>Sing In</a>
            <a onClick={() => {setView(2)}}>Log in</a>
        </div>
    </nav>
    </>
    );
}

export default BarraInicio;