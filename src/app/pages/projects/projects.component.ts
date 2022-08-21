import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import projectsData from '../projects/projects.json';
interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  sourceCode: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  projects: Project[] = projectsData;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      const id = params['id'];
      if (id) {
        this.projects = this.projects.filter(project => project.id === id);
      }
    });
  }



}
