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
                 [routerLink]="['/home']" (click)="setActive('home')">Home</a>
            </span>
                 <br>
                 <span class="text-muted">
              <a target="_self"
                 [routerLink]="['/about']" (click)="setActive('about')">About</a>
            </span>
                 <br>
                 <span class="text-muted">
              <a target="_self"
                 [routerLink]="['/education']" (click)="setActive('education')">Education</a>
            </span>
                 <br>
                 <span class="text-muted">
            <a target="_self"
               [routerLink]="['/skills']" (click)="setActive('skills')">Skills</a>
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

      <!-- Navigation when home is the active page. -->
      <div class="overlay-navLinks" *ngIf="getActive() === 'home'">
        <div class="link" id="top-link">
          <a target="_self"
             [routerLink]="['/home']" id="active"><h1 class="display-3">Home</h1>
          </a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples')"><h1 class="display-3">Writing Samples</h1></a>
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
             [routerLink]="['/home']" (click)="setActive('home')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" id="active"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples')"><h1 class="display-3">Writing Samples</h1></a>
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
             [routerLink]="['/home']" (click)="setActive('home')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" id="active"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples')"><h1 class="display-3">Writing Samples</h1></a>
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
             [routerLink]="['/home']" (click)="setActive('home')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" id="active"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples')"><h1 class="display-3">Writing Samples</h1></a>
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
             [routerLink]="['/home']" (click)="setActive('home')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" id="active"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples')"><h1 class="display-3">Writing Samples</h1></a>
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
             [routerLink]="['/home']" (click)="setActive('home')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" id="active"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples')"><h1 class="display-3">Writing Samples</h1></a>
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
             [routerLink]="['/home']" (click)="setActive('home')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" id="active"><h1 class="display-3">Skills</h1></a>
        </div>
        <div class="link" id="samplesLink">
          <a target="_self"
             [routerLink]="['/writing/samples']" (click)="setActive('writingSamples')"><h1 class="display-3">Writing Samples</h1></a>
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
             [routerLink]="['/home']" (click)="setActive('home')"><h1 class="display-3">Home</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/about']" (click)="setActive('about')"><h1 class="display-3">About</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/education']" (click)="setActive('education')"><h1 class="display-3">Education</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/experience']" (click)="setActive('experience')"><h1 class="display-3">Experience</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/extracurricular']" (click)="setActive('extra')"><h1 class="display-3">Extracurricular</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/interest']" (click)="setActive('interest')"><h1 class="display-3">Interests</h1></a>
        </div>
        <div class="link">
          <a target="_self"
             [routerLink]="['/skills']" (click)="setActive('skills')"><h1 class="display-3">Skills</h1></a>
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
  `,
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  active: string;
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

  setActive(page: string): void {
    this.active = page;
    this.closeNav('nav');
  }

  getActive(): string   {
      return this.active
  }

  closeNav(object: string)  {
    const element: HTMLElement = document.getElementById(object);
    this.renderer.setStyle(element, 'width', '0%');
  }

  openNav(object: string) {
    const element: HTMLElement = document.getElementById(object);
    this.renderer.setStyle(element, 'width', '100%');
  }

}
