import {Component, OnInit, Renderer2} from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
      
    <div class="topNav" *ngIf="screenWidth <= 576">
      <!-- Mobile Devices-->
      <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-dark p-4">
            <h5 class="text-white h4">Welcome!</h5>
            <span class="text-muted" id="topLink">
              <a target="_self"
                 [routerLink]="['/home']" (click)="setActive('home', 'home')">Home</a>
            </span>
            <br>
            <span class="text-muted">
              <a target="_self"
                 [routerLink]="['/about']" (click)="setActive('about', getPrevActive())">About</a>
            </span>
            <br>
            <span class="text-muted">
              <a target="_self"
                 [routerLink]="['/education']" (click)="setActive('education', getPrevActive())">Education</a>
            </span>
            <br>
            <span class="text-muted">
            <a target="_self"
               [routerLink]="['/skills']" (click)="setActive('skills', getPrevActive())">Skills</a>
            </span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
          <button class="navbar-toggler"
                  type="button" data-toggle="collapse"
                  data-target="#navbarToggleExternalContent" 
                  aria-controls="navbarToggleExternalContent" 
                  aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
     
    <!-- Navigation for desktops and laptops. -->
    <div *ngIf="screenWidth > 576" id="nav" class="overlay">
      <a href="javascript:void(0)" class="close-btn"
         (click)="closeNav('nav')">&times;
      </a>
      <img [src]="overlayBg" class="overlay-bg" alt="background for the overlay menu"/>


      <!-- Navigation when home is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'home'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" id="active"><h1 class="display-3">Home</h1>
          </a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'home')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'home')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'home')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'home')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'home')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'home')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples', 'home')"><h1 class="display-3">Writing Samples</h1></a>
        </div>
        <div class="link" id="culinary">
          <a target="_blank" href="https://charlton-culinary.vercel.app/" rel="culinaryBlogPage"><h1 class="display-3">Culinary Page</h1>
          </a>
        </div>
      </div>
      <!-- Navigation when about is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'about'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'about')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" id="active"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'about')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'about')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'about')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'about')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'about')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples', 'about')"><h1 class="display-3">Writing Samples</h1></a>
        </div>
        <div class="link" id="culinary">
          <a target="_blank" href="https://charlton-culinary.vercel.app/" rel="culinaryBlogPage"><h1 class="display-3">Culinary Page</h1>
          </a>
        </div>
      </div>
      <!-- Navigation when education is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'education'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'education')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'education')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" id="active"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'education')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'education')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'education')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'education')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples', 'education')"><h1 class="display-3">Writing Samples</h1></a>
        </div>
        <div class="link" id="culinary">
          <a target="_blank" href="https://charlton-culinary.vercel.app/" rel="culinaryBlogPage"><h1 class="display-3">Culinary Page</h1>
          </a>
        </div>
      </div>
      <!-- Navigation when experience is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'experience'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'experience')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'experience')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'experience')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" id="active"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'experience')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'experience')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'experience')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples', 'experience')"><h1 class="display-3">Writing Samples</h1></a>
        </div>
        <div class="link" id="culinary">
          <a target="_blank" href="https://charlton-culinary.vercel.app/" rel="culinaryBlogPage"><h1 class="display-3">Culinary Page</h1>
          </a>
        </div>
      </div>
      <!-- Navigation when extracurricular is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'extra'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'extra')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'extra')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'extra')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'extra')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" id="active"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'extra')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'extra')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples', 'extra')"><h1 class="display-3">Writing Samples</h1></a>
        </div>
        <div class="link" id="culinary">
          <a target="_blank" href="https://charlton-culinary.vercel.app/" rel="culinaryBlogPage"><h1 class="display-3">Culinary Page</h1>
          </a>
        </div>
      </div>
      <!-- Navigation when interest is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'interest'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'interest')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'interest')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'interest')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'interest')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'interest')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" id="active"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'interest')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples', 'interest')"><h1 class="display-3">Writing Samples</h1></a>
        </div>
        <div class="link" id="culinary">
          <a target="_blank" href="https://charlton-culinary.vercel.app/" rel="culinaryBlogPage"><h1 class="display-3">Culinary Page</h1>
          </a>
        </div>
      </div>
      <!-- Navigation when skills is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'skills'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'skills')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'skills')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'skills')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'skills')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'skills')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'skills')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" id="active"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples', 'interest')"><h1 class="display-3">Writing Samples</h1></a>
        </div>
        <div class="link" id="culinary">
          <a target="_blank" href="https://charlton-culinary.vercel.app/" rel="culinaryBlogPage"><h1 class="display-3">Culinary Page</h1>
          </a>
        </div>
      </div>
      <!-- Navigation when writing samples is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'writingSamples'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" (click)="setActive('home', 'writingSamples')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about', 'writingSamples')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education', 'writingSamples')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience', 'writingSamples')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra', 'writingSamples')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest', 'writingSamples')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills', 'writingSamples')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" id="active"><h1 class="display-3">Writing Samples</h1></a>
        </div>
        <div class="link" id="culinary">
          <a target="_blank" href="https://charlton-culinary.vercel.app/" rel="culinaryBlogPage"><h1 class="display-3">Culinary Page</h1>
          </a>
        </div>
      </div>
    </div>
    <!-- Menu button in the upper left corner. -->
    <div class="topHeader">
      <div class="open-btn" (click)="openNav('nav')"><i class="fas fa-bars"></i> Menu</div>
    </div>
    <div class="media-links">
      <a class="pinterestLink" target="_blank"
         [href]="pinterest"><i class="fab fa-pinterest"></i></a>
      <a class="linkedLink" target="_blank"
         [href]="linkedin"><i class="fab fa-linkedin"></i></a>
      <a class="facebookLink" target="_blank"
         [href]="facebook"><i class="fab fa-facebook"></i></a>
    </div>
    <!-- Menu button in the upper left corner. -->
    <div class="topHeader">
      <div class="open-btn" (click)="openNav('nav')"><i class="fas fa-bars"></i> Menu</div>
    </div>
    <div class="media-links">
      <a class="pinterestLink" target="_blank"
         [href]="pinterest"><i class="fab fa-pinterest"></i></a>
      <a class="linkedLink" target="_blank"
         [href]="linkedin"><i class="fab fa-linkedin"></i></a>
      <a class="facebookLink" target="_blank"
         [href]="facebook"><i class="fab fa-facebook"></i></a>
    </div>
  `,
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  overlayBg: string;
  active: string;
  prevActive: string;
  linkedin: string;
  pinterest: string;
  facebook: string;
  screenWidth: any;

  constructor(private renderer: Renderer2) {
    this.facebook = 'https://www.facebook.com/charlton.kam';
    this.linkedin = 'https://www.linkedin.com/in/charlton-kam-ba81b5176/';
    this.pinterest = 'https://www.pinterest.com/auburnthunder17/';

  }

  ngOnInit() {
    this.active = 'home';
    this.screenWidth = innerWidth;
  }

  setActive(page: string, prevActive: string): void {
    this.prevActive = prevActive;
    this.active = page;
    this.closeNav('nav');
    this.hideAllNoneActiveClouds(page, prevActive);
  }

  getActive(): string   {
      return this.active
  }

  getPrevActive(): string {
    return this.prevActive;
}

  closeNav(object: string)  {
    const element: HTMLElement = document.getElementById(object);
    this.renderer.setStyle(element, 'width', '0%');
  }

  openNav(object: string) {
    const element: HTMLElement = document.getElementById(object);
    this.renderer.setStyle(element, 'width', '100%');
  }

  hideAllNoneActiveClouds(activate: string, deactivate: string) {
    const activeElement: HTMLElement = document.getElementById(activate);
    this.renderer.setStyle(activeElement, 'visibility', 'visible');

    const nonActiveElement: HTMLElement = document.getElementById(deactivate);
    this.renderer.setStyle(nonActiveElement, 'visibility', 'hidden');
  }

}
