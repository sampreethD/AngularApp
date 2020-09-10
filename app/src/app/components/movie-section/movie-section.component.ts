import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonService} from '../../services/common.service'
@Component({
  selector: 'app-movie-section',
  templateUrl: './movie-section.component.html',
  styleUrls: ['./movie-section.component.css']
})
export class MovieSectionComponent implements OnInit {

  @Input('moviesArray')MoviesArray:any; 
  @Input('Header')Header:string; 

  constructor(public router:Router,public common:CommonService) { }

  ngOnInit() {
  
  }
  _showInfo(info){
    // console.log(info)
    this.common.shareMovieData(info);
    this.router.navigate(['/showInfo'])
  }
 

}
