import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CreateE(){
    const[No_factura,setNo_factura]=useState('');
    const[Fecha,setFecha]=useState('');
    const[Cod_producto,setCod_producto]=useState('');
    const[Cantidad,setCantidad]=useState('');
    const navigate = useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:8081/create1',{No_factura,Fecha,Cod_producto,Cantidad})
        .then(res=>{
            navigate('/Entrada')

        }).catch(err=> console.log(err));
    }
    return(
        <div className='d-flex  justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white rounded p-3 w-4'>
            <form onSubmit={handleSubmit}>
                <h2>AÑADIR REGISTRO</h2>
                <div className='mb-2'>
                    <label htmlFor=''>No_factura</label>
                    <input type='text' placeholder='Numero Factura' className='form-control'
                    onChange={e=>setNo_factura(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Fechan</label>
                    <input type='date' placeholder='fecha' className='form-control'
                    onChange={e=>setFecha(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Codigo Producto</label>
                    <input type='text' placeholder='Existencias' className='form-control'
                     onChange={e=>setCod_producto(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Cantidad</label>
                    <input type='text' placeholder='cantidad' className='form-control'
                    onChange={e=>setCantidad(e.target.value)}/>

                </div>

                <button className='btn btn-success'>Registar</button>

            </form>
            </div>

        </div>
    )
}

export default CreateE