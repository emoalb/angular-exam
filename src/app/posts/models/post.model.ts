export class PostModel {
  constructor (
    public _id:string,
    public imgUrl: string,
    public  title: string,
    public  context: string,
    public  username: string,
  ){}
}
