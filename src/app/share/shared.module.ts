import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
    /*RouterModule.forChild([
      {
          path: '', component: HomeComponent
      },
      {
          path: 'home', component: HomeComponent
      },
      {
          path: 'usuarios', component: PostagemComponent
      },
      {
          path: 'cadastro', component: CadastroComponent
      },
      {
          path: 'contato', component: ContatoComponent
      }
    ])*/
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }