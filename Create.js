import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Create(){
    const[Id_producto,setId_producto]=useState('');
    const[Descripcion,setDescripcion]=useState('');
    const[Existencias,setExistencias]=useState('');
    const[Entradas,setEntradas]=useState('');
    const[Salidas,setSalidas]=useState('');
    const navigate = useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8081/create',{Id_producto,Descripcion,Existencias,Entradas,Salidas})
        .then(res=>{
            navigate('/Inventario')

        }).catch(err=> console.log(err));
    }
    return(
        <div className='d-flex  justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white rounded p-3 w-4'>
            <form onSubmit={handleSubmit}>
                <h2>AÑADIR REGISTRO</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Id_producto</label>
                    <input type='text' placeholder='Codigo producto' className='form-control'
                    onChange={e=>setId_producto(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Descripcion</label>
                    <input type='text' placeholder='Descripcion' className='form-control'
                    onChange={e=>setDescripcion(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Existencias</label>
                    <input type='text' placeholder='Existencias' className='form-control'
                     onChange={e=>setExistencias(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Entradas</label>
                    <input type='text' placeholder='Entradas' className='form-control'
                    onChange={e=>setEntradas(e.target.value)}/>

                </div>

                <div className='mb-2'>
                    <label htmlFor=''>salidas</label>
                    <input type='text' placeholder='Salidas' className='form-control'
                    onChange={e=>setSalidas(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Registar</button>

            </form>
            </div>

        </div>
    )
}

export default Create