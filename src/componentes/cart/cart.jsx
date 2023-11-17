import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../cartItem/cartItem";
import './Cart.css';

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);
  if (cantidadTotal === 0) {
    return (
      <>
        <h2 className="noHayProductos" >No hay productos en el carrito</h2>
        <Link className="ver" to="/">Ver productos!</Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((productos) => (
        <CartItem key={productos.id} {...productos} />
      ))}
      <h3>Total: ${total}</h3>
      <h3>Cantidad Total: {cantidadTotal}</h3>
      <button  className="vacio"onClick={() => vaciarCarrito()}>Vaciar carrito</button>
      <Link  to="/checkout" className="fin">Finalizar compra!</Link>
    </div>
  );
};

export default Cart;
