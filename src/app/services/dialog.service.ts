import {
  Injectable,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Type,
  InjectionToken
} from '@angular/core';
import { of, Observable } from 'rxjs';

export const TOKEN1 = new InjectionToken<Observable<boolean>>('dialogResultIT');

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  currentDynamicComponent: Component = null;
  @ViewChild("vf",{read:ViewContainerRef})
  vf: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  open(comnonentType: Type<any>, payload: any): Observable<boolean> {
    let resolver = this.componentFactoryResolver.resolveComponentFactory(
      comnonentType
    );
    let dialogResult = new Observable<boolean>();
    let componentFactory = this.vf.createComponent(resolver);
    console.log('Try open dialog: ', comnonentType);
    return of();
  }
}
