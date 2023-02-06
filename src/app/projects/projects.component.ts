import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WipComponent } from '../wip/wip.component';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, CommonModule, NgOptimizedImage, WipComponent],
  providers: [DataService],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  data: any;
  projects: any;
  
  constructor(private http: HttpClient, private dataService: DataService, private router: Router, private activatedroute: ActivatedRoute){}

  ngOnInit(){
    this.http.get('/assets/data.json').subscribe(data => {
      this.data = data;
    });

    this.dataService.getProjects().subscribe(data => {
      this.projects = data;
    })
  }
}
