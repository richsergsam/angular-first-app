import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() pizzaId: number;
  @Output() pizzaCountChangeEvent = new EventEmitter<number>();

  @Input() count:number;

  constructor() { }

  ngOnInit(): void {
  }

  inc(){
    this.count += 1;
    this.pizzaCountChangeEvent.emit(this.count);
  }

  dec(){
    if (this.count > 0){
      this.count -=1;
      this.pizzaCountChangeEvent.emit(this.count);
    }
  }

}
