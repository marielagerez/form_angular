import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../model/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  @Input() alumnoHijo:Alumno;
  @Output() onChange= new EventEmitter();

  public emitirCambios(alumno:Alumno){

	this.onChange.emit(alumno); //le va a enviar 

  }
 
  constructor() { }

  ngOnInit() {
  }

}
