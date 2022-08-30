import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import projectsData from '../projects/projects.json';
interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  sourceCode: string;
}
@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule],
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
