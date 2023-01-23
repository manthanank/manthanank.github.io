import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsesRoutingModule } from './uses-routing.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uses',
  standalone: true,
  imports: [CommonModule, UsesRoutingModule],
  templateUrl: './uses.component.html',
  styleUrls: ['./uses.component.scss']
})
export class UsesComponent implements OnInit{

  data: any;
  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get('/assets/data.json').subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }
}
