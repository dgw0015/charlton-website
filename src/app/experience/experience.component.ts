import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  resumeDownloadLink: string;
  hotelExp: string;
  cWaymanExp: string;
  maysaraExp: string;
  maysaraBg: string;
  cWaymanLink: string;
  cWaymanLogo: string;
  maysaraLink: string;
  maysaraLogo: string;
  AuHotelLink: string;
  AuHotelLogo: string;
  lightsBg: string;
  navy: string;
  white: string;
  black: string;
  event: string;
  me: string;
  plate: string;
  reception: string;
  tableSetting: string;
  tableSetting2: string;


  constructor() {
    this.maysaraBg = './assets/images/outsideEvent.jpeg';
    this.lightsBg = './assets/images/interestBg.png';
    this.resumeDownloadLink = './assets/Charlton Resume updated 10_14_19.pdf';
    this.hotelExp = 'Banquet serving - setting up, serving, and breaking down meetings rooms both at the hotel' +
        ' and off-site for 10-500 guests. Assisted with plated meals, buffets, speed service meals, ' +
        'coffee breaks, and food breaks for various types of events ranging from rehearsal dinners to large conferences.';
    this.cWaymanExp = 'Floral- assisting in assembling all different sizes of floral arrangements for various ' +
        'types of events like grand openings of buildings, weddings, Auburn University events, sorority events, ' +
        'etc.';
    this.maysaraExp = 'Internship- assisted and to lead on different events throughout the summer. Assisting ' +
        'with weddings included setting up bars, bar tending, setting up tables and chairs, cleaning venue, ' +
        'and monitoring guests throughout the night. Lead events for a wine conference and business lunch ' +
        'where I booked caterer, ordered rentals, and designed layouts.';
    this.maysaraLink = 'https://maysara.com/';
    this.cWaymanLink = 'https://www.cwayman.com/welcome';
    this.AuHotelLink = 'https://www.auhcc.com/';
    this.maysaraLogo = './assets/images/Maysara-img.png';
    this.cWaymanLogo = './assets/images/C.Wayman-logo.png';
    this.AuHotelLogo = './assets/images/AU-hotel-img.png';
    this.tableSetting2 = './assets/images/tableSetting2.png';
    this.tableSetting = './assets/images/tableSetting.png';
    this.reception = './assets/images/reception-1.png';
    this.plate = './assets/images/plate.png';
    this.me = './assets/images/me.png';
    this.event = './assets/images/event.png';
    this.navy = './assets/images/navy.png';
    this.white = './assets/images/white.png';
    this.black = './assets/images/blk.png';
  }

  ngOnInit() {
  }

}
