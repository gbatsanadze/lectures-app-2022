
export class UserStatusChangeService {
  inactiveUsers: [];
  activeUsers: [];

  constructor() { }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(...this.activeUsers.splice(id, 1));
  }

  onSetToActive(id: number) {
    this.activeUsers.push(...this.inactiveUsers.splice(id, 1));
  }
}
