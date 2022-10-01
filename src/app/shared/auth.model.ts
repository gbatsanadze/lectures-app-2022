export class User{
  constructor(
    private _token: string,
    private _expDate: Date,
    public name: string,
    public username: string,
    public image: string
  ) {
  }

  get token(){
    if (this._expDate || this._expDate >= new Date()){
      return this._token;
    }
  }
}
