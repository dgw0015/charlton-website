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
  aubie: string;
  mobilDeviceBg: string;
  width: any;

  constructor(private renderer: Renderer2) {
    this.educationBg = './assets/images/Samford-Hall-Auburn-University.jpg';
    this.auburnLogo = './assets/mobile-imgs/AuburnLogo.png';
    this.secondBackground = './assets/images/rolledToomers.jpg';
    this.aubie = './assets/images/aubie-transparent.png';
    this.mobilDeviceBg = './assets/mobile-imgs/Auburn.jpg';
  }

  ngOnInit() {
    this.width = innerWidth;
  }


}
