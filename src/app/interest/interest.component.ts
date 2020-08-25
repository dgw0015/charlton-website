import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent implements OnInit {
  roseBg: string;
  cooking: string;
  frenchLaundry: string;
  floral: string;
  menu: string;
  som: string;
  pieChart: string;
  pieChartRef: string;

  constructor(private renderer: Renderer2) {
    this.roseBg = './assets/images/roseBg.png';
    this.cooking = './assets/images/cooking.png';
    this.frenchLaundry = './assets/images/FrenchLaundry.png';
    this.floral = './assets/images/floral.png';
    this.menu = './assets/images/menu1.png';
    this.som = './assets/images/masterSom.jpg';
    this.pieChart = './assets/images/Top-15-wine.png';
    this.pieChartRef = './assets/images/pieChartRef.png';
  }

  ngOnInit() {
  }

}
