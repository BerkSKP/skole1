import { Component, OnInit } from '@angular/core';
import { Movie } from "src/app/movie/movie";
import { TodoServiceService } from "src/app/todo-service.service";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  // todoService: Todo;

  constructor(private todoService:TodoServiceService) { }
  movies:any[];
  
  ngOnInit(): void {
      this.todoService.getTodosHttp1().subscribe(data=>{
        this.movies=data;
        console.log("hej");
        
      });
  }

}
