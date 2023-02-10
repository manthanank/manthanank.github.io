import { Route } from "@angular/router";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { ProjectsComponent } from "./projects.component";

export const PROJECT_ROUTES: Route[] = [
    {
        path: '',
        component: ProjectsComponent,
    },
    {
        path: 'project-details/:id',
        component: ProjectDetailsComponent
    }
]