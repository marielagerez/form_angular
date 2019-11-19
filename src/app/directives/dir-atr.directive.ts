import { Directive, ElementRef,Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirAtr]'
})
export class DirAtrDirective {

  constructor(private el:ElementRef,private renderer:Renderer) { 
 //    el.nativeElement.style.backgroundColor='red';
   
   
  }
  @HostListener('mouseleave') onMouseleave(){
    this.cambiarColor('yellow');
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.cambiarColor('red');
  }
  private cambiarColor(color:string){
    this.el.nativeElement.backgroundColor=color;
  } 


}
