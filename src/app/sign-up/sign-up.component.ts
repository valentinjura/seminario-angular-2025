import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @Output() formSubmitted = new EventEmitter();

  formSignUp: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formSignUp = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator });
  }

  //verificar si las contraseñas coinciden
  private passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;

    return password === confirm ? null : { passwordMismatch: true };
  }


  get f() {
    return this.formSignUp.controls;
  }

  onSubmit() {
    if (this.formSignUp.valid) {
      console.log('Formulario enviado:', this.formSignUp.value);
      this.formSubmitted.emit(this.formSignUp.value);
    } else {
      this.formSignUp.markAllAsTouched(); // muestra errores si el usuario no interactuo con el form
    }
  }


}
