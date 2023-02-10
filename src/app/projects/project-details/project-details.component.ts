import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [DataService],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  id: any;
  data: any;
  goBacktoprojects: boolean = true;

  constructor(private dataService: DataService,  private activatedroute: ActivatedRoute){}

  ngOnInit(){
    this.activatedroute.paramMap.subscribe(params => {
      let id = params.get('id');
      this.dataService.getProjectsById(id).subscribe((data) => {
        this.data = data;
      });
    });
  }

  ngOnDestroy() {}
}
