import { Component, OnInit } from '@angular/core';
import { Movie } from "src/app/movie/movie";
import { TodoServiceService } from "src/app/todo-service.service";
import { HttpClientModule } from '@angular/common/http';
import axios from 'axios'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  // todoService: Todo;

  constructor(private todoService:TodoServiceService) { }
  movies:Movie;
  
  ngOnInit(): void {
    // axios.get("https://localhost:44395/api/movie").then(rep => {console.log(rep)});
     // this.todoService.postTodosHttp2().subscribe(data=>{this.movies=data;
     // this.todoService.post<any>('https://jsonplaceholder.typicode.com/posts', { title: 'Angular POST Request Example' }).subscribe(data => {
      // this.postId = data.id;
      // console.log("hej");      
      };
    }
