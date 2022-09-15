import {CounterService} from "./counter.service";

export class ManageService {

  activeUsers = ['ლევანი', 'დიმა'];
  inactiveUsers = ['მარიამი', 'გიორგი'];

  constructor() {
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(...this.activeUsers.splice(id, 1));
  }

  onSetToActive(id: number) {
    this.activeUsers.push(...this.inactiveUsers.splice(id, 1));
  }
}
