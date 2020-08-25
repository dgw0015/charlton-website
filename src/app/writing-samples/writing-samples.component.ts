import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing-samples',
  templateUrl: './writing-samples.component.html',
  styleUrls: ['./writing-samples.component.scss']
})
export class WritingSamplesComponent implements OnInit {
  pen: string;
  moodBoardLink: string;
  milanote: string;
  sample1: string;
  sample2: string;

  constructor() {
    this.pen = './assets/images/writing.png';
    this.moodBoardLink = 'https://app.milanote.com/1Iqbln14mYf95Y';
    this.milanote = './assets/images/milanote2.png';
    this.sample1 = './assets/Color Scheme .pdf';
    this.sample2 = './assets/Centerpieces.pdf';
  }

  ngOnInit() {
  }

}
