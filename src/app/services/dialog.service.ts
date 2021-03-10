import {
  Injectable,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  Type,
  InjectionToken,
  Injector
} from '@angular/core';
import { of, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { DialogComponent } from '../shared/dialog/dialog.component';

export const TOKEN1 = new InjectionToken<any>('dialogResultIT');

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  currentDynamicComponent: Component = null;
  component: DialogComponent;
  vf: ViewContainerRef;
  result: Observable<boolean>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  register(ref: DialogComponent, result: Observable<boolean>){
    console.log('register');
    this.component = ref;
    this.vf = ref.content;
    this.result = result;
  }

  open(comnonentType: Type<any>, payload: any): Observable<boolean> {
    this.vf.clear();
    this.component.isContentSet = true;
    let resolver = this.componentFactoryResolver.resolveComponentFactory(
      comnonentType
    );
    let componentFactory = this.vf.createComponent(resolver, 0, Injector.create({providers: [{provide: TOKEN1, useValue: payload}]}));
    console.log('Try open dialog: ', comnonentType);
    return this.result.pipe(take(1));
  }
}
