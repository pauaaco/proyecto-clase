import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Validationc from "./Validationclient";
import axios from 'axios';
//formulario para registrarse
//linea 28 ayuda a llevar con el boton iniciar sesion a LOGIN
function Signupc(){
    const[values,setValues]=useState({
        Nombres:'',
        Apellidos:'',
        tipo:'',
        num:''
    })
    const navigate=useNavigate();
    const[errors, setErrors]=useState({})

    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validationc(values));
        if (errors.Nombres===""&& errors.Apellidos===""&& errors.tipo===""&& errors.num===""&& errors.ciudad===""&& errors.correo===""){
            axios.post('http://localhost:8081/signupc',values)
            .then(res=>{
                navigate('/Facturacion');

            })
            .catch(err=> console.log(err));
        }

    }



    return(
        <div className='d-flex  justify-content-center align-items-center bg-dark vh-100'>
            <div className='bg-white rounded p-2 w-20 '>
                <h2>REGISTRO</h2>
                <form action="" onSubmit={handleSubmit}>

                <div className="mb-4">  
                    <label htmlFor="name"><strong>Nombre</strong></label>
                    <input type="text" placeholder='Nombre' name='Nombres' onChange={handleInput}className='form-control  border-dark'/>
                    {errors.Nombres && <span className='text-danger'>{errors.Nombres}</span>}
                </div>

                <div className="mb-4 ">  
                    <label htmlFor="text"><strong>Apellidos</strong></label>
                    <input type="text" placeholder='Apellidos' name='Apellidos'onChange={handleInput}className='form-control rounded border-dark w-100'/>
                    {errors.Apellidos && <span className='text-danger'>{errors.Apellidos}</span>}
                </div>

                <div className="mb-4 ">  
                    <label htmlFor="text"><strong>Tipo identificacion</strong></label>
                    <select name="tipo"onChange={handleInput} className='form-control rounded border-dark w-100'>
                      <option value="">Seleccione una opción</option>
                    <option value="CC">CC</option>
                    <option value="TI">TI</option>
                    <option value="PASAPORTE">PASAPORTE</option>
                    </select>

                    {errors.tipo && <span className='text-danger'>{errors.tipo}</span>}
                </div>

                <div className="mb-4 ">  
                    <label htmlFor="text"><strong>Numero identificacion</strong></label>
                    <input type="text" placeholder='Numero identificacion' name='num'onChange={handleInput}className='form-control rounded border-dark w-100'/>
                    {errors.num && <span className='text-danger'>{errors.num}</span>}
                </div>

                <div className="mb-4 ">  
                    <label htmlFor="text"><strong>Ciudad</strong></label>
                    <select name="ciudad"onChange={handleInput} className='form-control rounded border-dark w-100'>
                      <option value="">Seleccione una opción</option>
                    <option value="Bogota">Bogota</option>
                    <option value="Cali">Cali</option>
                    <option value="Cartagena">Cartagena</option>
                    </select>

                    {errors.ciudad && <span className='text-danger'>{errors.ciudad}</span>}
                </div>

                <div className="mb-4 ">  
                    <label htmlFor="email"><strong>Correo</strong></label>
                    <input type="email" placeholder='Correo' name='correo'onChange={handleInput}className='form-control rounded border-dark w-100'/>
                    {errors.correo && <span className='text-danger'>{errors.correo}</span>}
                </div>

                <button typer='submit'className='btn btn-success w-100 '>Registrarse</button>
                <Link to="/Facturacion" className='btn btn-dark border w-100 '>Volver</Link>
                
                </form>
            </div>
        </div>

      

    )
}
export default Signupc