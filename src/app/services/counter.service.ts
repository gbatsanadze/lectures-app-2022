export class CounterService {

  showFlag = false;
  timeId: number;
  count = 0;

  constructor() {
  }

  onUserStatusChange() {
    this.count++;
    this.showFlag = true;
    this.timeId = setTimeout(() => {
      if (this.showFlag === true) {
        this.showFlag = false;
      } else {
        clearTimeout(this.timeId);
      }
    }, 2000);
  }
}
