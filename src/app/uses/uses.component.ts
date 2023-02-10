import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-uses',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterModule],
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
