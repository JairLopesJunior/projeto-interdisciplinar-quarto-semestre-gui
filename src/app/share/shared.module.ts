import { RegisterComponent } from './../core/pages/register/register.component';
import { CampoControlErroModule } from './components/campo-control-erro/campo-control-erro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CampoControlErroModule,
    RouterModule.forChild([
      {
          path: '', component: RegisterComponent
      }
    ])
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }