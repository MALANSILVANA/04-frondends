import {elementAt} from "rxjs/internal/operators";

class Usuario {
    constructor(
        public nombre: string,
        public apellido: string,
    ){}

}
const adrian = new Inicio(nombre:'Adrian',apellido:'eguez');
console.log('Inicio');
const etiquetaImagen:any = document.getElementById(elementId: 'imagen');
etiquetaImagen.src =