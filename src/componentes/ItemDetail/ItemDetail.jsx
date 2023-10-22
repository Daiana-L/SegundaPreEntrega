import './ItemDetail.css'
import { useState } from 'react'
import Contador from '../Contador/Contador'
const ItemDetail = ({id, nombre, stock, precio, img}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0)

const manejadorCantidad = (cantidad) =>{
  setAgregarCantidad(cantidad);
  console.log("Productos agregados:" + cantidad);
}

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam hic molestiae laudantium non provident maxime magni debitis sapiente! Pariatur illum tempore excepturi asperiores, officiis magnam ex placeat quibusdam necessitatibus?</p>

    {
      agregarCantidad > 0 ? (<link to="/cart">Terminar Compra</link>) : (<Contador inicial={1} 
        stock={stock} funcionAgregar={manejadorCantidad}/>)
    }


    </div>
  )
}

export default ItemDetail