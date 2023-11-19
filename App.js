import React from "react";
import Login from "./Login";
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from "./Singnup";
import Home from "./Home";
import Inventario from "./Inventario";
import Clientes from "./Clientes";
import Facturacion from "./Facturacion";
import Salidas from "./Salida";
import Entrada from "./Entrada";
import Create from "./Create";
import CreateE from "./CreateE";
import Update from "./Update";
import UpdateI from "./UpdateI";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/home'element={<Home/>}></Route>
      <Route path='/Inventario'element={<Inventario/>}></Route>
      <Route path='/Facturacion'element={<Facturacion/>}></Route>
      <Route path='/Clientes'element={<Clientes/>}> </Route>
      <Route path='/Salida'element={<Salidas/>}> </Route>
      <Route path='/Entrada'element={<Entrada/>}> </Route>
      <Route path='/create'element={<Create/>}> </Route>
      <Route path='/create1'element={<CreateE/>}> </Route>
      <Route path='/update/:id'element={<Update/>}> </Route>
      <Route path='/update1/:id'element={<UpdateI/>}> </Route>


     
    </Routes>
    </BrowserRouter>

 
  )
}

export default App;
