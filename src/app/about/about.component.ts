import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  fullPageBg: string;
  aboutBg: string;
  facebook: string;
  linkedin: string;
  pinterest: string;
  instagram: string;
  aboutBg2: string;
  natureBg2: string;
  width = innerWidth;

  constructor() {
    this.fullPageBg = './assets/images/about-bg.png';
    this.aboutBg = './assets/images/About-background.png';
    this.facebook = 'https://www.facebook.com/charlton.kam';
    this.linkedin = 'https://www.linkedin.com/in/charlton-kam-ba81b5176/';
    this.pinterest = 'https://www.pinterest.com/auburnthunder17/';
    this.instagram = 'https://www.instagram.com/c.kam_design/';
    this.aboutBg2 = './assets/mobile-imgs/about.png';
    this.natureBg2 = './assets/mobile-imgs/natureBg2.png';
  }

  ngOnInit() {
  }

}
