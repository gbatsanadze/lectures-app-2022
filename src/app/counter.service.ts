import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counter = 0;
  allowAddActiveClass = false;

  increseCounter(){
    this.counter++;
    this.allowAddActiveClass = true;
    setInterval(() => {
      this.allowAddActiveClass = false;
    }, 1000);
  }
}

