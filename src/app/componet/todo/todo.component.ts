import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/todo-service.service';
import { Todo } from "src/app/models/todo";



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    todos:Todo[];
    
  
  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
    this.todoService.getTodosHttp().subscribe(data=>{this.todos=data
      
    });
  
    
  }
  
}

