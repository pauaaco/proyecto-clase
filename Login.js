import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Loginvalidation';
import axios from 'axios';

function Login(){
    const[values,setValues]=useState({
        Correo:'',
        Contrasena:''
    })
    const navigate=useNavigate();
    const[errors, setErrors]=useState({})

    const handleInput=(event)=>{
        setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.Correo===""&& errors.Contrasena===""){
            axios.post('http://localhost:8081/login',values)
            .then(res=>{
               if(res.data==="success"){
                navigate('/home');
               }else{
                alert("ERROR");

               }

            })
            .catch(err=> console.log(err));
        }

    }

    return(
        <div className='d-flex  justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white rounded p-3 w-4 '>
                <h3>INICIO SESIÓN</h3>

                <form action="" onSubmit={handleSubmit}>
                <div className="mb-4">  
                    <label htmlFor="email"><strong>Correo</strong></label>
                    <input type="email" placeholder='Correo electronico' name='Correo' onChange={handleInput} className='form-control  border-dark'/>
                 {errors.Correo && <span className='text-danger'>{errors.Correo}</span>}
                </div>

                <div className="mb-4 ">  
                    <label htmlFor="password"><strong>Contraseña</strong></label>
                    <input type="password" placeholder='Contraseña' name='Contrasena'onChange={handleInput} className='form-control rounded border-dark w-100'/>
                    {errors.Contrasena && <span className='text-danger'>{errors.Contrasena}</span>}
                </div>
                <button type='submit'  className='btn btn-success w-100 '>Ingresar</button>
                <input class="form-check-input" type="checkbox" value="aceptar"/>
                <a class="link-offset-2 link-underline link-underline-opacity-0"href="https://www.canva.com/design/DAFz9NV-JIo/s8iFr_rHrYBUgwmcmYfYWg/view?utm_content=DAFz9NV-JIo&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">Acepta nuestra politica de tratamiento de datos</a>

                <Link to="/signup" className='btn btn-dark border w-100 text-decoration-none'>Registrar</Link>
                
                </form>
            </div>
        </div>
    )
}
 export default Login