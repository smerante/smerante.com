import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register-user',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean;
  registeredEmail: boolean;
  errorMessage: string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.submitted = false;
    this.registeredEmail = false;
    this.errorMessage = '';
    this.registerForm = new FormGroup(
      {
        'firstName': new FormControl(''),
        'lastName': new FormControl(''),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', [Validators.required, Validators.minLength(6),])
      });
  }

  submit() {
    this.submitted = true;
    this.errorMessage = '';
    if (this.registerForm.invalid) {
      setTimeout(() => {
        let elt = <HTMLElement>document.querySelector('input[invalid="true"]');
        elt.focus();
      }, 0)
    } else {
      let email = this.registerForm.value.email;
      let password = this.registerForm.value.password;
      let name = this.registerForm.value.firstName + " " + this.registerForm.value.lastName;
      this.auth.signupUser(email, password, name)
        .then(
          () => {
            this.registeredEmail = true;
          }
        )
        .catch(
          (err) => {
            let errorMessage = (err && err.message) ? err.message : 'Unkown error';
            console.log(errorMessage);
            this.errorMessage = errorMessage;
          }
        );
    }
  }
}
