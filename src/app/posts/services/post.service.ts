import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PostModel} from "../models/post.model";
import {Data} from "../../config/config";
import {CommentModel} from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private router: Router) {

  }


  getAllPosts() {
    return this.http.get<PostModel[]>(Data.baseUrl + 'appdata/' + Data.appKey + '/posts',
      {headers: {'Authorization': 'Kinvey ' + localStorage.getItem('authToken')}});
  }
  getPostById(_id: string){
    return this.http.get<PostModel>(Data.baseUrl + 'appdata/' + Data.appKey + '/posts/'+_id,{headers: {'Authorization': 'Kinvey ' + localStorage.getItem('authToken')}});
  }
  createNewPost(body: PostModel) {
    return this.http.post(Data.baseUrl + 'appdata/' + Data.appKey + '/posts/',body,{headers:{'Authorization': 'Kinvey ' + localStorage.getItem('authToken')}});
  }
  updatePost(body:PostModel){
    return this.http.put(Data.baseUrl + 'appdata/' + Data.appKey + '/posts/'+body._id,body,{headers:{'Authorization': 'Kinvey ' + localStorage.getItem('authToken')}});
  }
  deletePost(_id:string){

    return this.http.delete(Data.baseUrl + 'appdata/' + Data.appKey + '/posts/'+_id,{headers:{'Authorization': 'Kinvey ' + localStorage.getItem('authToken')}})
  }
  getAllComments() {
    return this.http.get<CommentModel[]>(Data.baseUrl + 'appdata/' + Data.appKey + '/comments',
      {headers:{'Authorization': 'Kinvey ' + localStorage.getItem('authToken')}});
  }
  addComment(body:CommentModel){
    return this.http.post(Data.baseUrl + 'appdata/' + Data.appKey + '/comments/' ,body,{headers:{'Authorization': 'Kinvey ' + localStorage.getItem('authToken')}});
  }
  deleteComment(_id:string){
    return this.http.delete(Data.baseUrl + 'appdata/' + Data.appKey + '/comments/'+_id,{headers:{'Authorization': 'Kinvey ' + localStorage.getItem('authToken')}})
  }
}
