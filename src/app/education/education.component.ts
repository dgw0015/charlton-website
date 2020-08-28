import {Component, OnInit, Renderer2} from '@angular/core';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationBg: string;
  secondBackground: string;
  auburnLogo: string;
  mobilDeviceBg: string;
  width: any;
  facebook: string;
  linkedin: string;
  pinterest: string;
  instagram: string;
  servSafeLink: string;
  cEventCsrt: string;
  somLevel1Cert: string;
  AUWebsite: string;

  constructor(private renderer: Renderer2) {
     this.educationBg = './assets/images/Samford-Hall-Auburn-University.jpg';
     this.auburnLogo = './assets/mobile-imgs/AuburnLogo.png';
     this.secondBackground = './assets/images/rolledToomers.jpg';
     this.mobilDeviceBg = './assets/mobile-imgs/Auburn.jpg';
     this.facebook = 'https://www.facebook.com/charlton.kam';
     this.linkedin = 'https://www.linkedin.com/in/charlton-kam-ba81b5176/';
     this.pinterest = 'https://www.pinterest.com/auburnthunder17/';
     this.instagram = 'https://www.instagram.com/c.kam_design/';
     this.servSafeLink = './assets/ServSafe Certification.pdf';
     this.cEventCsrt = './assets/CVENT Certification.pdf';
     this.somLevel1Cert = './assets/Intro to Somm Level 1.PDF';
     this.AUWebsite = "https://www.auburn.edu/";
  }

  ngOnInit() {
    this.width = innerWidth;
  }


}
