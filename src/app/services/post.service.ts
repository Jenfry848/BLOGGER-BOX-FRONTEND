import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs';

import {Post} from '../data/post';
import { environnement}from '../environnement/environnement';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    private postsUrl = `${environnement.apiUrl}/v1/posts`;

    constructor(private http: HttpClient) { }

  
    getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environnement.apiUrl}/v1/posts/${id}`);

}


  create(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environnement.apiUrl}/v1/posts`, post)
      .pipe(catchError(this.handleError<Post>('create')));
  }

  update(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postsUrl}/${post.id}`, post)
      .pipe(catchError(this.handleError<Post>('update')));
  }

  delete(post: Post): Observable<boolean> {
    return this.http.delete<boolean>(`${this.postsUrl}/${post.id}`)
      .pipe(catchError(this.handleError<boolean>('delete')));
  }

  search(keyword: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}/search?keyword=${keyword}`)
      .pipe(catchError(this.handleError<Post[]>('search', [])));
  }

  protected handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`, error);
      return of(result as T);
    };
  }
}






  