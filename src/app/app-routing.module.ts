import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, Router} from '@angular/router';


import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ExperienceComponent} from './experience/experience.component';
import {EducationComponent} from './education/education.component';
import {ExtracurricularComponent} from './extracurricular/extracurricular.component';
import {InterestComponent} from './interest/interest.component';
import {SkillsComponent} from './skills/skills.component';
import {WritingSamplesComponent} from './writing-samples/writing-samples.component';


const desktopRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'writing/samples',
    component: WritingSamplesComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'interest',
    component: InterestComponent
  },
  {
    path : 'skills',
    component: SkillsComponent
  },
  {
    path: 'extracurricular',
    component: ExtracurricularComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
