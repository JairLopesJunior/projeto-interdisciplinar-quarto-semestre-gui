import { enableRipple } from '@syncfusion/ej2-base';
import { NavbarComponent } from './../../share/components/navbar/navbar.component';
import { SharedModule } from './../../share/shared.module';
import { RouterModule } from '@angular/router';
import { CampoControlErroModule } from './../../share/components/campo-control-erro/campo-control-erro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgChartsModule } from 'ng2-charts';
import { ArduinoComponent } from './arduino/arduino.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

enableRipple(false);

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    ArduinoComponent
  ],
  imports: [
    CommonModule,
    CampoControlErroModule,
    FormsModule,
    ButtonModule,
    DropDownButtonModule,
    DropDownListModule,
    SharedModule,
    NgChartsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: '', component: HomeComponent
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
