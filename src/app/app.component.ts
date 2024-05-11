import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PageLoginComponent } from './page-login/page-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageRegistrationComponent } from './page-registration/page-registration.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule, 
      FormsModule,
      ReactiveFormsModule,
      RouterOutlet, 
      PageLoginComponent,
      NavbarComponent,
      PageHomeComponent,
      PageRegistrationComponent
    ]
})
export class AppComponent {
  title = 'vousyager';
}