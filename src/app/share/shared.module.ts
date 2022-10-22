import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../core/pages/login/login.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
          path: '', component: LoginComponent
      }
    ])
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }