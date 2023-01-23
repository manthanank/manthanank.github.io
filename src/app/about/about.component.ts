import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { WipComponent } from '../wip/wip.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, WipComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  data: any;
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('/assets/data.json').subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}
