export class UserModel {
  constructor(
    public username: string,
    public email: string,
    public _kmd: {
      authtoken: string
      lmt: string
    }
  ) { }
}
