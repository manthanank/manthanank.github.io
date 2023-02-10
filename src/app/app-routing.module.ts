import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: "full" },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'projects', loadComponent: () => import('./projects/projects.component').then(m => m.ProjectsComponent)},
  { path: 'project-details/:id', loadComponent: () => import('./projects/project-details/project-details.component').then(m => m.ProjectDetailsComponent) },
  { path: 'blogs', loadComponent: () => import('./blogs/blogs.component').then(m => m.BlogsComponent) },
  { path: 'uses', loadComponent: () => import('./uses/uses.component').then(m => m.UsesComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: 'wip', loadComponent: () => import('./wip/wip.component').then(m => m.WipComponent) },
  { path: '**', loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
