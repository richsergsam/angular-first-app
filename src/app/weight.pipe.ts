import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight'
})
export class WeightPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let weight: string = '';
    if (value > 999) {
      weight = (value / 1000).toFixed(2) + ' кг';
    }
    else {
      // тут бы выбросить исключение
      if (value > 0) {
        weight = value.toString() + ' г';
      }
    }
    return weight;
  }

}
