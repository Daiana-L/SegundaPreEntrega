import { useState, useEffect } from "react";
//import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import {
  getDoc,
  doc
} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productos, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {

    async function getFromFirebase(){
      const itemRef = doc(db, "inventario", idItem);
      const itemSnapshot = await getDoc(itemRef)
      if(itemSnapshot.exists()){
        const data = itemSnapshot.data();
        const nuevoProducto = { id: itemSnapshot.id, ...data };
        setProducto(nuevoProducto);
      }
    }

    getFromFirebase()

  }, [idItem]);

  return (
    <div>
      <ItemDetail {...productos} />
    </div>
  );
};

export default ItemDetailContainer;
