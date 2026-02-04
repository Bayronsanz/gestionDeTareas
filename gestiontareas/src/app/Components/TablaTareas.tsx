import React from 'react'
import { useContextTarea } from '../provider/ProviderTarea';

export default function TablaTareas() {

    const {tareas} = useContextTarea();
  return (
    <div>
      <h3>Tabla de tareas</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map(tarea => (
            <tr key={tarea.id}>
              <td>{tarea.id}</td>
              <td>{tarea.titulo}</td>
              <td>{tarea.descripcion}</td>
              <td>{tarea.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
