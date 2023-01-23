import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { HttpClient } from '@angular/common/http';
import { WipComponent } from '../wip/wip.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, NgOptimizedImage, LoadingBarRouterModule, WipComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  name: any;
  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get('/assets/data.json').subscribe(data => {
      this.data = data;
      this.name = data;
      console.log(data);
    })
  }
}
