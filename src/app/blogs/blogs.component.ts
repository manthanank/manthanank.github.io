import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { WipComponent } from '../wip/wip.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, WipComponent],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{

  data: any;
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('/assets/data.json').subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}
