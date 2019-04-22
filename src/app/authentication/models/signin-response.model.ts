export class SigninResponseModel
{
  constructor(
public username: string,
 public _kmd: {
   authtoken: string
  }
  )
{}
}
