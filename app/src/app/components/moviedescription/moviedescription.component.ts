import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../services/common.service";

@Component({
  selector: "app-moviedescription",
  templateUrl: "./moviedescription.component.html",
  styleUrls: ["./moviedescription.component.css"],
})
export class MoviedescriptionComponent implements OnInit {
  movieDetail: any = {};

  constructor(public common: CommonService) {}

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.common.movieObject.subscribe((res) => {
      this.movieDetail = res;
      console.log(this.movieDetail);
      
    });
  }
}
