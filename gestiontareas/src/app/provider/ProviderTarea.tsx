'use client';
import React, { useContext, useState } from 'react'
import { ViewReact } from '../Models/ViewReact'
import { Tarea } from '../Models/Tarea';
import { TareaContext } from '../context/TareaContext';

export default function ProviderTarea(props: ViewReact) {

    const [tareas, setTareas] = useState<Tarea []>([]);

    function agregarTarea(tarea: Tarea){
        setTareas([...tareas, tarea]);
    }

  return (
    <TareaContext.Provider value={{tareas, agregarTarea}}>
        {props.children}
    </TareaContext.Provider>   
  )
}

export function useContextTarea() {
    return useContext(TareaContext);
}

