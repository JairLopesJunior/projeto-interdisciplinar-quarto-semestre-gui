import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  componentRegistration: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public componentForm(): void {
    this.componentRegistration = this._fb.group({
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
