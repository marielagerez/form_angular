import { Component, OnInit } from '@angular/core';
import { Alumno } from '../model/alumno'; 
import { LogService } from '../services/log.service'; 
import { ListadoalumnoService } from '../services/listadoalumno.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
    
 public alumno:Alumno = {
    id:1,
    nombre:"Juan",
    apellido:"Perez",
    email:"jperez@gmail.com",
    descripcion:"Analista de Datos",
    dni:32562111,
    foto:"https://robohash.org/jperez"
  };
  public eliminarAlumno(al:Alumno){  
    console.log("Eliminar A:"+al); 
  }

  
  public editarAlumno(al:Alumno){   
    //cargara los datos del form con ese valor
    this.alumnoServ.alumno=al;
    this._router.navigate(['formAlumno']);
  }
  public cambiarDatos(){  
    this.alumno.nombre="ROBERT",
    this.alumno.foto="https://robohash.org/rperez"
  }

  public restaurarDatos(){  
    this.alumno.nombre="Juan",
    this.alumno.foto="https://robohash.org/jperez"
  }


  constructor( public listadoLogger:LogService , public _router:Router, public alumnoServ:ListadoalumnoService ) { 

    this.listadoLogger.logger();
    console.log(alumnoServ.listadoAlumnos);
    
  }

  ngOnInit() {

   console.log(this.alumno);
  
  }

}
