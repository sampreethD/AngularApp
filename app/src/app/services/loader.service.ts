import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public httpRequest = new Subject<boolean>();
  httpRequest$ = this.httpRequest.asObservable();

  httpRequestInProgress(bool) {
    this.httpRequest.next(bool);
  }

}
