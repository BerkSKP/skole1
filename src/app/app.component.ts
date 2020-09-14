import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import {HttpClientModule, HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit():void{
  }
  movies = new FormGroup({
    film: new FormControl('')
  });
  onSubmit() {
    console.log(this.movies.value);
    this.test1= this.movies.get('film').value;
  }
  test1:string=" ";
  title = 'biograf';
  url = "";
  selectFile(event) {
    if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) => {
        this.url = event.target.result
      }
    }
    
  }
  

}
