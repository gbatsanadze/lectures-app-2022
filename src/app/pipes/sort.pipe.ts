import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[]): any[] {
    console.log(1 );
    console.log(value );
    console.log(2);
    console.log(value.sort());
    return value.sort();
  }

}
