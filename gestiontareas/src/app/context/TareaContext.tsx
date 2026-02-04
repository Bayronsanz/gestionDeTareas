'use client';
import { createContext } from "react";
import { Tarea } from "../Models/Tarea";

export const TareaContext = createContext({
    tareas: [] as Tarea[],
    agregarTarea: (tareas: Tarea) => {},
});

