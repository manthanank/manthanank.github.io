import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { WipComponent } from '../wip/wip.component';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, WipComponent],
  providers: [DataService],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{

  data: any;
  blogs: any;
  constructor(private http: HttpClient, private dataService: DataService){}

  ngOnInit(){
    // this.http.get('/assets/data.json').subscribe(data => {
    //   this.data = data;
    //   console.log(data);
    // });

    this.dataService.getBlogs().subscribe(data => {
      // console.log(data);
      this.blogs = data;
    })
  }
}
