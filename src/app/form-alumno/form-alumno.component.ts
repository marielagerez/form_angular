import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListadoalumnoService } from '../services/listadoalumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {
  
  public formGroupAlumno:FormGroup;

  constructor(private FormBuilder:FormBuilder, public alumnoServ:ListadoalumnoService, public _router:Router) { 
    
  }

  ngOnInit() {
    this.construirForm();
  }

  public construirForm(){
    this.formGroupAlumno=this.FormBuilder.group({
      //la estructura
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      dni:['',Validators.required],
      descripcion:['',Validators.required],
      email:['',[Validators.required,Validators.email]]
    })

    this.formGroupAlumno.get('nombre').setValue(this.alumnoServ.alumno.nombre);
    this.formGroupAlumno.get('descripcion').setValue(this.alumnoServ.alumno.descripcion);
    this.formGroupAlumno.get('apellido').setValue(this.alumnoServ.alumno.apellido);
    this.formGroupAlumno.get('dni').setValue(this.alumnoServ.alumno.dni);
    this.formGroupAlumno.get('email').setValue(this.alumnoServ.alumno.email);

  }
  public guardarAlumno(){
    console.log(this.alumnoServ.alumno);
    if(this.alumnoServ.alumno != null && !this.formGroupAlumno.invalid ){

      this.alumnoServ.alumno.nombre =this.formGroupAlumno.get('nombre').value;
      this.alumnoServ.alumno.descripcion=this.formGroupAlumno.get('descripcion').value;
      this.alumnoServ.alumno.apellido=this.formGroupAlumno.get('apellido').value;
      this.alumnoServ.alumno.dni=this.formGroupAlumno.get('dni').value;
      this.alumnoServ.alumno.email=this.formGroupAlumno.get('email').value;
    }
    
  
    this._router.navigate(['']);
   
  }

}
