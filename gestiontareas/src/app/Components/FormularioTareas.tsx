'use client'
import React, { useState } from 'react'
import { Tarea } from '../Models/Tarea';
import { useContextTarea } from '../provider/ProviderTarea';
import TablaTareas from './TablaTareas';

export default function FormularioTareas() {

    const { tareas, agregarTarea } = useContextTarea();
    const [nombre, setNombre] = useState<string>('');
    const [descripcion, setDescripcion] = useState<string>('');
    const [estado, setEstado] = useState<string>('pendiente');

    function agregarTareaLocal(){

        const nuevaTarea:Tarea = {

            id: tareas.length + 1,
            titulo: nombre,
            descripcion: descripcion,
            estado: estado
        }
        
        agregarTarea(nuevaTarea);
        
        setNombre('');
        setDescripcion('');
        setEstado('pendiente');
    }


  return (
    <div className='row'>
        <div className='col-md-6'>
            <h3>Formulario de Tareas</h3>
            <form action="" className='form'>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre de la tarea" /> <br />
                <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripcion de la tarea" /> <br />
                <select value={estado} onChange={(e) => setEstado(e.target.value)}>
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                    <option value="en-progreso">En Progreso</option>
                </select><br />
            <button className='btn btn-primary mt-2' type='button' onClick={agregarTareaLocal}>Agregar tarea</button>
            </form>
        </div>
        <div className='col-md-6'>
            
            <TablaTareas />
        </div>
    </div>
  )
}
