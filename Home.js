
import { Link } from 'react-router-dom'
import './home.css';
function Home(){
  
//PARTE VISUAL
    return(
        <div>
    <div className="navegar">
      <h1 className="logo">
        <i className="fas fa-circle-user"></i> Administrador
      </h1>
      <nav>
        <ul>
          <li className="Menu">
            <i className="fas fa-house"></i> Menu
          </li>
          <li className="Menu">
            <i className="fas fa-clipboard"></i>
            <Link to="/Inventario"> Inventario</Link>
          </li>
          <li className="Menu">
            <i className="fas fa-money-bill"></i>
            <Link to="/Facturacion"> Facturación</Link>
          </li>
          <li className="Menu">
            <i className="fas fa-users"></i>
            <Link to="/Clientes"> Clientes</Link>
          </li>
          <li className="Menu">
            <i className="fas fa-right-to-bracket"></i>
            <Link to="/"> Salir</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
    )
}
export default Home