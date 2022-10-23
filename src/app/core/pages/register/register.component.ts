import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegistration: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.componentForm();
  }

  onSubmit(): void {}

  verificaValidTouched(campo: string) {
    return !this.formRegistration.get(campo)?.valid 
    && this.formRegistration.get(campo)?.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  public componentForm(): void {
    this.formRegistration = this._fb.group({
      name: ['',  Validators.required],
      email: ['',  Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['',  Validators.required],
      repeatPassword: ['',  Validators.required]
    })
  }
}
