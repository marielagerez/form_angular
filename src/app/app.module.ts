import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { DirAtrDirective } from './directives/dir-atr.directive';
import { DirEstDirective } from './directives/dir-est.directive';
import { FormAlumnoComponent } from './form-alumno/form-alumno.component';
import { AlumnoComponent } from './alumno/alumno.component';


@NgModule({
  declarations: [
    AppComponent, ListadoComponent, DirAtrDirective, DirEstDirective, FormAlumnoComponent, AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }