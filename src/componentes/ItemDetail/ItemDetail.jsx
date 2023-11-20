/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './ItemDetail.css'
import {  useState  } from 'react'
import Contador from '../Contador/Contador'
import { Link } from 'react-router-dom'
import {CarritoContext} from '../../context/CarritoContext'
import { useContext } from 'react'


const ItemDetail = ({id, nombre, stock, precio, img}) => {

  const [cantidad, setCantidad] = useState(0)

const {agregarAlCarrito} = useContext(CarritoContext);
(agregarAlCarrito)

const addToCart = (cantidad) =>{
  setCantidad(cantidad);

  const item = {id , nombre, precio};
  agregarAlCarrito(item , cantidad);
}

  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <img src={img} alt={nombre} />
        <p className='texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias numquam hic molestiae laudantium non provident maxime magni debitis sapiente! Pariatur illum tempore excepturi asperiores, officiis magnam ex placeat quibusdam necessitatibus?</p>

    {
      cantidad > 0 ? (<Link to="../cart" className='terminarCompra' >Terminar Compra! </Link>) : (<Contador inicial={1} 
        stock={stock} funcionAgregar={addToCart}/>)
    }


    </div>
  )
}

export default ItemDetail