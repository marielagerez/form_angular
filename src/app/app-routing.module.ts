import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';


const routes: Routes = [
  {path: '',component:ListadoComponent},
  {path:'formAlumno',component: FormAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
