import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(public http: HttpClient) {}

  async callApi() {
    return new Promise((resolve, reject) => {
      this.http.get("http://api.tvmaze.com/shows?page=1").subscribe(
        (res) => {
          return resolve(res);
        },
        (err) => {
          return reject(err);
        }
      );
    });
  }
}
