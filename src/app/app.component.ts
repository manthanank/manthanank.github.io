import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private service: ServiceService) { }

  ngOninit() {
  }
}
