import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PostModel} from "../models/post.model";
import {Data} from "../../config/config";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private router: Router) {

  }

  private headers_kinvey = {
    'Authorization': 'Kinvey ' + localStorage.getItem('authToken')
  };
  getAllPosts() {
    return this.http.get<PostModel[]>(Data.baseUrl + 'appdata/' + Data.appKey + '/posts',
      {headers:this.headers_kinvey});
  }
  getPostById(_id: string){
    return this.http.get<PostModel>(Data.baseUrl + 'appdata/' + Data.appKey + '/posts/'+_id,{headers:this.headers_kinvey});
  }
  createNewPost(body: PostModel) {
    return this.http.post(Data.baseUrl + 'appdata/' + Data.appKey + '/posts/',body,{headers:this.headers_kinvey});
  }
  updatePost(body:PostModel){
    return this.http.put(Data.baseUrl + 'appdata/' + Data.appKey + '/posts/'+body._id,body,{headers:this.headers_kinvey});
  }
  deletePost(_id:string){
    return this.http.delete(Data.baseUrl + 'appdata/' + Data.appKey + '/posts/'+_id,{headers:this.headers_kinvey})
  }

}
