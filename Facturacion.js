import React from "react";
import { Link } from 'react-router-dom';
import './stylefacturacion.css';
function Facturacion(){

//PARTE VISUAL
    return(
        <div>
      <div className="navegar">
        <h1 className="logo">
          <li className="Superior"><i className="fas fa-circle-user"></i> Admin</li>
        </h1>
        <nav>
          <ul>
            <li className="Menu"><i className="fas fa-house"></i> Menu</li>
            <li className="Menu">
              <i className="fas fa-clipboard"></i><Link to="/Inventario"> Inventario</Link>
            </li>
            <li className="Menu">
              <i className="fas fa-money-bill"></i><Link to="/Facturacion"> Facturación</Link>
            </li>
            <li className="Menu">
              <i className="fas fa-users"></i><Link to="/Clientes"> Clientes</Link>
            </li>
            <li className="Menu">
              <i className="fas fa-right-to-bracket"></i><Link to="/"> Salir</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="contenido">
        <center>
          <h1>Facturación</h1>
          <header></header>
          <section>
            <label><b>Identificación</b></label>
            <input type="text" />
            <input type="button" value="Buscar cliente" />
            <hr />
            <label><b>Código Producto</b></label>
            <input type="text" />
            <label><b>Cantidad</b></label>
            <input type="text" />
            <input type="button" value="Buscar Articulo" />
            <input type="button" value="Totalizar cuenta" />
          </section>
        </center>
        <hr />
        <center>
          <section>
            <table border="1">
              <thead>
                <tr>
                  <th>Articulo</th>
                  <th>Marca</th>
                  <th>Talla</th>
                  <th>Precio</th>
                  <th>Oferta</th>
                  <th>Descuento</th>
                  <th>Precio Final</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>$</td>
                  <td>%</td>
                  <td>$</td>
                  <td>$</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </section>
        </center>
        <hr />
        <input type="checkbox" /><label>Facturada</label>
        <br />
        <input type="checkbox" /><label>Imprimir copia ticket</label>
        <div style={{ textAlign: 'right' }}>
          <label>Total $</label>
          <input type="text" />
          <br />
          <label>Pago $</label>
          <input type="text" />
          <br />
          <label>Cambio $</label>
          <input type="text" />
        </div>
        <div className="info-izquierda">
          <label>HORA:</label>
          <input type="text" />
          <label>CAJERO/A:</label>
          <input type="text" />
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="button-container">
            <form action="Vista_Previa_Ticket (1).html">
              <input type="submit" value="Vista Previa Ticket" />
            </form>
            <form action="menu cajero.html">
              <input type="submit" value="Cancelar compra" />
            </form>
          </div>
        </div>
      </div>
    </div>
   
    )
}
export default Facturacion