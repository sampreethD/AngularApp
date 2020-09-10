import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonService } from "../../services/common.service";
import {MovieSectionComponent} from '../movie-section/movie-section.component'
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

@ViewChild('MovieSectionComponent',{static:true})movie:MovieSectionComponent


  constructor(public common: CommonService) {}

  arr: any = [];
  drama: any = [];
  comedy: any = [];
  romantic: any = [];
  action: any = [];
  superNatural: any = [];
  adult: any = [];

  categories=[
    {
      arr:this.comedy,
      header:'COMEDY'
    },
    {
      arr:this.drama,
      header:'DRAMA'
    },
    {
      arr:this.romantic,
      header:'ROMANTIC'
    },
    {
      arr:this.action,
      header:'ACTION'
    },
    {
      arr:this.superNatural,
      header:'SUPER NATURAL'
    },
    {
      arr:this.adult,
      header:'ADULT'
    },
    
  ]

  ngOnInit() {
    this.getShowLists();
    
  }

  getShowLists() {
    this.common.callApi().then((res) => {
      if (res) {
        // console.log(res);
        let comedy_films: any;
        let drama_films: any;
        let romantic_films: any;
        let action_films: any;
        let superNatural_films: any;
        let adult_films: any;
        this.arr = res;
        this.arr.filter((x) => {
          if (x["genres"].length) {
            comedy_films = x["genres"].filter((genre) => genre.includes("Comedy"));
            drama_films = x["genres"].filter((genre) => genre.includes("Drama"));
            romantic_films = x["genres"].filter((genre) => genre.includes("Romance"));
            action_films = x["genres"].filter((genre) => genre.includes("Action"));
            superNatural_films = x["genres"].filter(
              (genre) => genre.includes("Supernatural")
            );
            adult_films = x["genres"].filter((genre) => genre.includes("Adult"));

            if (comedy_films.length) {
              this.comedy.push(x);
              comedy_films = -1;
            }
            if (drama_films.length) {
              this.drama.push(x);
              drama_films = -1;
            }
            if (romantic_films.length) {
              this.romantic.push(x);
              romantic_films = -1;
            }
            if (action_films.length) {
              this.action.push(x);

              action_films = -1;
            }
            if (superNatural_films.length) {
              this.superNatural.push(x);
              superNatural_films = -1;
            }
            if (adult_films.length) {
              this.adult.push(x);
              adult_films = -1;
            }
          }
        });
      }
    });
  }
}
