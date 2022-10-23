import { SharedModule } from './../../share/shared.module';
import { RouterModule } from '@angular/router';
import { CampoControlErroModule } from './../../share/components/campo-control-erro/campo-control-erro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CampoControlErroModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'login', component: LoginComponent
      }
    ])
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
})
export class PagesModule { }