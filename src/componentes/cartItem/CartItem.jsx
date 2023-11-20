/* eslint-disable react/prop-types */
import "./cartItem.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div>
      <div key={item.id}>
        <h4>{item.nombre}</h4>
        <p>cantidad: {cantidad}</p>
        <p>precio: {item.precio}</p>
        <button className="button" onClick={() => eliminarProducto(item.id)}>
          Eliminar
        </button>
        <hr />
      </div>
    </div>
  );
};


export default CartItem;
