import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logo' src={"../img/logo3D.jpg"} alt="Logo" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className={'categoriasnav'} to="categoria/1">Soportes</NavLink>
          </li>

          <li>
            <NavLink className={'categoriasnav'} to="categoria/2">Macetas</NavLink>
          </li>
          
          <li>
            <NavLink className={'categoriasnav'} to="categoria/3">Decoracion</NavLink>
          </li>

          <li>
            <NavLink className={'categoriasnav'} to="categoria/4">Piezas</NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar