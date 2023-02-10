import { HashLocationStrategy, LocationStrategy, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WipComponent } from './wip/wip.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HttpClientModule,
    LoadingBarRouterModule,
    NgOptimizedImage,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    WipComponent,
    UiSwitchModule,
  ],
  providers: [
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  
  isDark = false;

  ngOnInit() {}

  toggle() {
    this.isDark
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark');
  }
}
