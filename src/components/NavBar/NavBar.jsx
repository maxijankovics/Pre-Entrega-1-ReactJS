import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png"
function NavBar() {
  return (
    <nav className="navegacion">
        <div>
            <img className="logo" src={logo} alt="Logo Bistro"/>
        </div>
        <ul className="links">
            <li className="link-item">
                <a href="#">Inicio</a>
            </li>
            <li className="link-item">
                <a href="#">Nosotros</a>
            </li>
            <li className="link-item">
                <a href="#">Carta</a>
            </li>
            <li className="link-item">
                <a href="#">Platos</a>
            </li>
            <li className="link-item">
                <a href="#">Contacto</a>
            </li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar