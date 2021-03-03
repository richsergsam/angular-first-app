import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface PizzaTypeCheckbox {
  name: string;
  title: string;
  checked: boolean;
  ingridients: Array<string>;
  contain: boolean; // pizza must contain or not this ingridients
}

@Component({
  selector: 'app-pizza-type-selector',
  templateUrl: './pizza-type-selector.component.html',
  styleUrls: ['./pizza-type-selector.component.scss'],
})
export class PizzaTypeSelectorComponent implements OnInit {
  checkboxes: Array<PizzaTypeCheckbox> = [
    {
      name: 'withoutMeet',
      title: 'Без мяса',
      checked: false,
      ingridients: ['острый цыпленок', 'ветчина', 'пепперони'],
      contain: false,
    },
    {
      name: 'notSpicy',
      title: 'Не острая',
      checked: false,
      ingridients: ['острый цыпленок', 'острый перец халапеньо'],
      contain: false,
    },
    {
      name: 'dessert',
      title: 'Дессертная',
      checked: false,
      ingridients: ['сгущенное молоко'],
      contain: true,
    },
  ];

  @Output() selectionChangeEvent = new EventEmitter<Array<PizzaTypeCheckbox>>();

  constructor() {}

  ngOnInit(): void {}

  selectionChanged(event: EventEmitter<Array<PizzaTypeCheckbox>>) {
    this.selectionChangeEvent.emit(this.checkboxes);
  }
}
