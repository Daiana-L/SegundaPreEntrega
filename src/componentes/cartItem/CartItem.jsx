/* eslint-disable react/prop-types */
import './cartItem.css'
import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext (CarritoContext);




return (
    <div>
        <h4>{item.nombre}</h4>
        <p>cantidad:{cantidad}</p>
        <p>precio:{item.precio}</p>
        <buttom className="buttom" onClick={()=> eliminarProducto(item.id)} >Eliminar</buttom>
        <hr  />
    </div>
)
}

export default CartItem