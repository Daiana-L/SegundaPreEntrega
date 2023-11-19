import { useState, useEffect } from "react";
import { getDocs, collection, query } from "firebase/firestore";
import { db } from "../../services/config";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './Productos.css';
const Productos = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();
  
  useEffect(() => {
    async function getFromFirebase() {
      const {docs} = await getDocs(query(collection(db, "inventario")));

      let retrievedProducts = docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      if (typeof idCategoria != "undefined") {
        retrievedProducts = retrievedProducts.filter(
          (p) => p.idCat === idCategoria
        );
      }

      setProductos(retrievedProducts);
    }

    getFromFirebase()
  }, [idCategoria]);

  const renderProducts = (array) =>
    array.map((p) => (
      <div key={p.id} className="cardProducto" >
        <img src={p.img} />
        <h3>{p.nombre}</h3>
        <p>precio: $ {p.precio}</p>
        <p> Stock: {p.stock}</p>
        <Link to={`/item/${p.id}`} className='botondetalles'> Ver Detalles </Link>
      </div>
    ));

  return (
    <>
      <h2 className="titulo">Productos</h2>
      <div className="productos-container">{renderProducts(productos)}</div>
    </>
  );
};

export default Productos;
