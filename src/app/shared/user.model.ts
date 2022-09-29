export class User {
  constructor(private _token: string,
              private _expirationDate: number,
              public name: string,
              public username: string,
              public image: string) {
  }

  get token() {
    if (this._token && new Date() < this._expirationDate) {
      return this._token;
    }
  }
}
