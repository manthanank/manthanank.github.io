import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WipComponent } from '../wip/wip.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, CommonModule, NgOptimizedImage, WipComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  data: any;
  
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('/assets/data.json').subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}
