import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortByName'
})
export class SortByNamePipe implements PipeTransform {

  transform(arr: any[], prop) {
    arr.sort((a, b) => {
      return (a.owner < b.owner) ? -1 : (a.owner > b.owner) ? 1 : 0;
    });
    return arr;
  }
}

