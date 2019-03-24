import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  errorMessage: string;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.submitted = false;
    this.errorMessage = '';
    this.loginForm = new FormGroup(
      {
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', Validators.required)
      });
  }

  submit() {
    this.submitted = true;
    this.errorMessage = '';
    if (this.loginForm.invalid) {
      setTimeout(() => {
        let elt = <HTMLElement>document.querySelector('input[invalid="true"]');
        elt.focus();
      }, 0)
    } else {
      let email = this.loginForm.value.email;
      let password = this.loginForm.value.password;
      console.log('siging in user: ', email);
      this.auth.signInUser(email, password)
        .then(() => {
          if (this.auth.isVerified()) {
            this.router.navigate(['/components']);
          } else {
            this.errorMessage = 'User not verified yet'
          }
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

  resendVerication(){
    this.auth.verifyEmail();
  }

  goTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
