export class UserModel
{
  constructor(
    public username: string,
    public _kmd: {
      authtoken: string

    }
  )
  {}
}
