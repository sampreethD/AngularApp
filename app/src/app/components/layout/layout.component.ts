import { Component, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  showLoader = false;
  constructor(private router: Router,
    private loader: LoaderService) {

  }

  ngOnInit() {
    // this.router.navigate(['']);
  }

  ngOnChanges(changes: SimpleChange): void {
    this.loader.httpRequest$.subscribe(res => {
      this.showLoader = res;
    });

  }

}
