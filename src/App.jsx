
import Productos from './componentes/productos/Productos';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {CarritoProvider} from './context/CarritoContext';
import Cart from './componentes/cart/cart';


const App = () => {
  return (
    <>

      <BrowserRouter>
      <CarritoProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <Productos/> } />
          <Route path='/categoria/:idCategoria' element={ <Productos/> }  />
          <Route path='/item/:idItem' element={ <ItemDetailContainer/> } />
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<h2>sitio en construccion</h2>} />
        </Routes>
        /</CarritoProvider>
      </BrowserRouter>
      
    </>
  )
}

export default App