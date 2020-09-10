import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.css']
})
export class MovieSectionComponent implements OnInit {

  @Input('moviesArray')MoviesArray:any; 
  @Input('Header')Header:string; 

  constructor() { }

  ngOnInit() {
    console.log(this.Header,this.MoviesArray)
  }
  test(){
    console.log('hello');
    
  }

}
