import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    SkillsComponent,
    ProfilesComponent,
    AboutComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
