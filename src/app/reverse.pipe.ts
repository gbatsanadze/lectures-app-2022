import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  str = '';

  transform(value) {
    for (let i = value.length - 1; i >= 0; i--) {
      this.str += value[i];
    }
    return this.str;
  }

}
