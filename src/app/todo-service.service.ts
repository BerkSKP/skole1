import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from "src/app/models/todo";
import { Movie } from './movie/movie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})



export class TodoServiceService {
  todos:Todo[];
  movies:Movie[];
  movie:Movie;
  url = 'https://jsonplaceholder.typicode.com/todos'
  url1 = 'https://localhost:44395/api/movie'
  constructor(private http:HttpClient) { 
  
  }
  getTodosHttp():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url)
  }
  /* getTodosHttp1():Observable<any[]>{
    return this.http.get<any[]>(this.url1)
  } */

  postTodosHttp2(movies1:any):Observable<Movie>{
    return this.http.post<Movie>(this.url1,movies1,httpOptions);
  }
  
}
