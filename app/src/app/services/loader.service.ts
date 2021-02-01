import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public httpRequest = new Subject<boolean>();
  httpRequest$ = this.httpRequest.asObservable();

  httpRequestInProgress(bool) {
    console.log('within loader',bool);
    this.httpRequest.next(bool);
  }

}
