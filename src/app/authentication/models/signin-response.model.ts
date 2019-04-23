export class SigninResponseModel {
  constructor(
    public _id: string,
    public username: string,
    public _kmd: {
      authtoken: string
      roles: {}
    }
  ) {
  }
}
