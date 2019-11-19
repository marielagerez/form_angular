import { Injectable } from '@angular/core';
//import  listadoinscriptos  from '../../assets/MOCK_DATA.json';
import { Alumno } from '../model/alumno'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListadoalumnoService {

  //public listadoAlumnos:Alumno[]=listadoinscriptos;
  public listadoAlumnos:Alumno[];
  public alumno:Alumno= new Alumno();

  constructor(private sHttp:HttpClient) {
    this.sHttp.get('assets/MOCK_DATA.json').toPromise().then((listado:Alumno[])=>{
      this.listadoAlumnos=listado;
    });
   }

   get(al:Alumno){
     this.alumno.nombre=al.nombre;
     this.alumno.apellido=al.apellido;
     this.alumno.descripcion=al.descripcion;
     this.alumno.email=al.email;
     this.alumno.dni=al.dni;

     //return this.listadoAlumnos.find(alumno => alumno.id == id);
   }

   eliminarAlumno(al:Alumno){
     
  }


}
