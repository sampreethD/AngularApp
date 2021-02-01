import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private movieObservable = new BehaviorSubject<any>({});
  movieObject = this.movieObservable.asObservable();

  constructor(public http: HttpClient) {}

  async callApi() {
    return new Promise((resolve, reject) => {
      this.http.get('https://api.tvmaze.com/shows?page=1').subscribe(
        (res) => {
          return resolve(res);
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }

  shareMovieData(movieDetails: any) {
    this.movieObservable.next(movieDetails);
  }
}
