import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideImageKitLoader } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule,NgOptimizedImage],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
