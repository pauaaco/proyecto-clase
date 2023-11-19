import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
function Entrada() {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8081/entrada')
    .then(res=>setData(res.data))
    .catch(err =>console.log(err));
  })


  return (
    <div>
      <div className="navegar">
        <h1 className="logo">
          <li className="Superior">
            <i className="fas fa-circle-user"></i> Inventario
          </li>
        </h1>
        <nav>
          <ul>
            <li className="Menu"><i className="fas fa-house"></i> Menu</li>
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
              <Link to="/Cliente"> Clientes</Link>
            </li>
            <li className="Menu">
              <i className="fas fa-right-to-bracket"></i>
              <Link to="/"> Salir</Link>
            </li>
          </ul>
        </nav>
      </div>

      <section className="justify-content-center text-aling-center border-0 aling bg-light">
      <Link to="/create1"className="btn btn-success ">Añadir +</Link>
        <table border="bg-white rounded border-0 p-5">
          <thead>
            <tr>
              <th># factura</th>
              <th>Fecha</th>
              <th>Codigo Producto</th>
              <th>Cantidad</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
          {data && data.map ((d,i)=>(
                <tr>
                    <td>{d.No_factura}</td>
                    <td>{d.Fecha}</td>
                    <td>{d.Codigo_Producto}</td>
                    <td>{d.Cantidad}</td>
                    <td>
                      <Link to={`/update/${d.id}`}className="btn btn-sm btn-primary">Actualizar</Link>
                    </td>
                  </tr>
                 

             ))}
          </tbody>
        </table>
        <Link to="/Salida" className='btn btn-dark border w-20 text-decoration-none'>Salidas</Link>
        <Link to="/Inventario" className='btn btn-dark border w-20 text-decoration-none'>Inventario</Link>
      </section>

      
    </div>
  );
}

export default Entrada;