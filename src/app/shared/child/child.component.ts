import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import {DynamicComponent} from "../dynamic/dynamic.component";

import {DialogService} from '../../services/dialog.service'
import {DialogComponent} from '../../shared/dialog/dialog.component'


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @ViewChild("vf",{read:ViewContainerRef})
  vf:ViewContainerRef = this.dialogService.vf;

  constructor(private dialogService:DialogService) { }

  ngOnInit(): void {
    this.dialogService.open(DialogComponent, null);
  }

}

// export class ChildComponent implements OnInit {

//   @ViewChild("vf",{read:ViewContainerRef})
//   vf:ViewContainerRef;

//   constructor(private componentFactoryResolver:ComponentFactoryResolver) { }

//   ngOnInit(): void {
//   }

//   ngAfterViewInit() {
//     //This pieces of code adds dynamic component ( Just trust me for now  )
//     let resolver = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
//     let componentFactory =   this.vf.createComponent(resolver);

//   }

// }
