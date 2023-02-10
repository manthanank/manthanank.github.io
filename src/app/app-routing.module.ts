import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: "full" },
  { path: '', loadChildren: () => import('./home/home-routes').then(m => m.HOME_ROUTES) },
  { path: 'projects', loadChildren: () => import('./projects/project-routes').then(m => m.PROJECT_ROUTES)},
  { path: 'blogs', loadChildren: () => import('./blogs/blogs-routes').then(m => m.BLOGS_ROUTES) },
  { path: 'uses', loadChildren: () => import('./uses/uses-routes').then(m => m.USES_ROUTES) },
  { path: 'about', loadChildren: () => import('./about/about-routes').then(m => m.ABOUT_ROUTES) },
  { path: 'wip', loadComponent: () => import('./wip/wip.component').then(m => m.WipComponent) },
  { path: '**', loadComponent: () => import('./error/error.component').then(m => m.ErrorComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
