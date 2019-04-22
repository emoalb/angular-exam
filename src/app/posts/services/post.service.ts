import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PostModel} from "../models/post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUrl: string = 'https://baas.kinvey.com/';
  private appKey: string = 'kid_S1wP8tRfX';
  private headers = {
    'Authorization': 'Kinvey ' +localStorage.getItem('authToken')
};
  constructor(private http: HttpClient, private router: Router) {

  }
  getAllPosts() {
    return this.http.get<PostModel[]>(this.baseUrl + 'appdata/' + this.appKey + '/posts',
      {headers:this.headers});
  }
  getPostById(_id:string){
    return this.http.get<PostModel>(this.baseUrl + 'appdata/' + this.appKey + '/posts/'+_id,{headers:this.headers});

  }
}
