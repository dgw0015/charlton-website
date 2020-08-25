import { Component, OnInit } from '@angular/core';
import {ScreenSizeService} from '../screenSize.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 portrait: string;
 quoteImg: string;
 quote2: string;
 homeBg: string;
 clouds: string;
 facebook: string;
 linkedin: string;
 pinterest: string;
 forest: string;


  constructor(private screenService: ScreenSizeService) {
    this.portrait = './assets/images/CEK-transparent.png';
    this.quoteImg = './assets/images/quote.png';
    this.homeBg = './assets/images/Mountains.png';
    this.clouds = './assets/images/clouds.png';
    this.facebook = 'https://www.facebook.com/charlton.kam';
    this.linkedin = 'https://www.linkedin.com/in/charlton-kam-ba81b5176/';
    this.pinterest = 'https://www.pinterest.com/auburnthunder17/';
    this.forest = './assets/mobile-imgs/forest.png';
    this.quote2 = './assets/mobile-imgs/quote.png';
  }

  ngOnInit() {

  }


}
