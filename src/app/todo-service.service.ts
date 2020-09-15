import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from "src/app/models/todo";
import { Movie } from './movie/movie';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todos:Todo[];
  movies:Movie[];
  url = 'https://jsonplaceholder.typicode.com/todos'
  url1 = 'https://localhost:44395/api/administrator'
  constructor(private http:HttpClient) { 
  
  }
  getTodosHttp():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url)
  }
  getTodosHttp1():Observable<any[]>{
    return this.http.get<any[]>(this.url1)
  }
  
}
