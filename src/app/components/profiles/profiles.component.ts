import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  isReadMore = true;

  constructor() { }

  ngOnInit(): void {
  }
  showText() {
    this.isReadMore = !this.isReadMore
  }
}
