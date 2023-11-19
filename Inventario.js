
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './styleinventario.css';
import axios from "axios";
function Inventario(){

  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8081/inventario')
    .then(res=>setData(res.data))
    .catch(err =>console.log(err));
  })


//PARTE VISUAL
    return(
        <div>
        <div className="navegar">
          <h1 className="logo">
            <li className="Superior">
              <i className="fas fa-circle-user"></i> Admin
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
                <Link to="/Clientes"> Clientes</Link>
              </li>
              <li className="Menu">
                <i className="fas fa-right-to-bracket"></i>
                <Link to="/"> Salir</Link>
              </li>
            </ul>
          </nav>
        </div>
  
        <section className=" justify-content-center text-aling-center border-0 aling bg-light ">
        <Link to="/create"className="btn btn-success ">Añadir +</Link>
          <table className="bg-white rounded border-0 p-5">
            <thead class="text-center">
              <tr>
                <th>Id_producto</th>
                <th>Descripcion</th>
                <th>Existencias</th>
                <th>Entradas</th>
                <th>Salidas</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map ((d,i)=>(
                <tr>
                    <td>{d.Id_producto}</td>
                    <td>{d.Descripcion}</td>
                    <td>{d.Existencias}</td>
                    <td>{d.Entradas}</td>
                    <td>{d.Salidas}</td>
                    <td>
                      <Link to={`/update1/${d.id}`} className="btn btn-sm btn-primary">Actualizar</Link>
                    </td>
                  </tr>
                 

             ))}
            </tbody>
          </table>
          <Link to="/Salida" className='btn btn-dark border w-20 text-decoration-none justify-content-center '>Salida</Link>
        <Link to="/Entrada" className='btn btn-dark border w-20 text-decoration-none justify-content-center '>Entrada</Link>
        </section>
  
        
      </div>
    )
}
export default Inventario;
