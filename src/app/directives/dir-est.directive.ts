import { Directive, Input, TemplateRef ,ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDirEst]'
})
export class DirEstDirective {

  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef) { 

  }
  @Input() set appDirEst(numero:number){
    for(let i=0;i<numero;i++){
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
