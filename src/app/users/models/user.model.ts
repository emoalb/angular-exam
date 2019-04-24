export class UserModel {
  constructor(
    public _id:string,
    public username: string,
    public email: string,
    public _kmd: {
      authtoken: string
      lmt: string,
      roles:{}
    }
  ) { }
}
