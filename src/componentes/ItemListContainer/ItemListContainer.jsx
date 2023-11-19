import { useState, useEffect } from "react";
//import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "productos"), where("idCat", "==", idCategoria))
      : collection(db, "productos");
    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(nuevosProductos);
      })
      .catch((error) => console.error(error)); 
  }, [idCategoria]);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontFamily:
            "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
          fontSize: "35px",
        }}
      >
        Productos
      </h1>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
