import {Component, OnInit} from '@angular/core';
import {ScreenSizeService} from './screenSize.service';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  width: any;

  constructor(private screenSize: ScreenSizeService) {
  }

  ngOnInit(): void {
    this.width = innerWidth;
  }

}
