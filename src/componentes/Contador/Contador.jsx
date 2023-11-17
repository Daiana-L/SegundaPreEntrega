/* eslint-disable react/prop-types */
import { useState } from "react";
import './Contador.css'
const Contador = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);


    

    const sumarContador = () => {
        if(contador < stock){
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if(contador > inicial){
        setContador(contador - 1);
        }
    }

return (
<>
    <div>
        <button onClick={restarContador} className="suma" > - </button>
        <strong className="contador"> {contador} </strong>
        <button onClick={sumarContador} className="suma"> + </button>
        <button className="agregar" onClick={()=> funcionAgregar(contador)}> Agregar al carrito! → </button>
    </div>
</>
)
}

export default Contador