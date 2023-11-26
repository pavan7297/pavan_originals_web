import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSlideToggleModule,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weclome = "Hello, It's Me";
  name = 'pavan srinivas';
  means = "And I'a";
  description = "I'm a webdeveloper with experience over 2 years.";
  description2 =
    'experties is to create a website design, Frontend design and backend design';
  description3 = 'many more.....';
}
