import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc } from "firebase/firestore"
import "./Checkout.css";


export const Checkout = () => {
        const [nombre, setNombre] = useState("");
        const [apellido, setApellido] = useState("");
        const [telefono, setTelefono] = useState("");
        const [email, setEmail] = useState("");
        const [emailConfirmacion, setEmailConfirmacion] = useState("");
        const [error, setError] = useState("");
        const [orderId, setOrderId] = useState("");

        const {carrito, total} = useContext(CarritoContext);

        const manejadorFormulario = (event) => {
                event.preventDefault();

                if(!nombre || !apellido || !telefono || !email || !emailConfirmacion)
                { setError("Por favor complete los campos"); return; } 
            
                if(email !== emailConfirmacion){
                    setError("los email no coinciden"); return;
                }
            
                const orden = {
                    items: carrito.map(producto =>  ({
                    id: producto.item.id,
                    nombre: producto.item.nombre,
                    cantidad: producto.cantidad })),
                    total: total,
                    fecha: new Date(),
                    nombre,
                    apellido,
                    telefono,
                    email
                };
                addDoc(collection(db, "ordenes"), orden)
                .then( docRef => {
                setOrderId(docRef.id);
                })
                .catch(error =>  {
                        console.log("error al crear la orden",error);
                        setError("se produjo un error al crear la orden")
                });
            

            }

return (
    <div>
            <h2> Checkout </h2>
            <form onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto =>(
                    <div key={producto.item.id}>
                    <p>{producto.item.nombre} x {producto.cantidad}</p>
                    <p>${producto.item.precio}</p>
                    <hr/>
                    </div>
                    ))
                }
                <h2 className="formulario">Formulario de compra!</h2>
                <div className="campos">
                    <label htmlFor="Nombre">Nombre </label>
                    <input className="input" type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} id="nombre"/>
                </div>
                <div className="campos">
                    <label htmlFor="Apellido">Apellido</label>
                    <input  className="input"type="text"  onChange={(e) => setApellido(e.target.value)} value={apellido} id="apellido"/>
                </div>
                <div className="campos">
                    <label htmlFor="Telefono">Telefono</label>
                    <input className="input" type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono} id="telefono"/>
                </div>
                <div className="campos">
                    <label htmlFor="Email">Email</label>
                    <input className="input" type="email" onChange={(e) => setEmail(e.target.value)} value={email} id="email"/>/
                </div>
                <div className="campos">
                    <label htmlFor="Confirmacion email" className="confirmacion">Confirmacion email</label>
                    <input className="input" type="email" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
                </div>
                {
                    error && <p style={{color:"red"}}>{error}</p>
                }
                <button className="buttom" type="submit">Confirmar Compra!</button>
                
                {
                    orderId && (
                        <strong className="gracias">¡Gracias por su Compra! tu numero de orden es: {orderId} </strong>
                    )
                }

            </form>
    </div>
)
}
