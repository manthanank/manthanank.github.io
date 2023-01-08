import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  // constructor(private toastr: ToastrService) {}

  ngOnInit() {
    // this.toastr.success('Welcome To my Portfolio', 'Hey!', {
    //   timeOut: 3000,
    // });
  }
}
