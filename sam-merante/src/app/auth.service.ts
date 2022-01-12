import { Injectable } from '@angular/core';

import * as firebase from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn: boolean;
  email: string;
  token: string;
  auth = firebase.getAuth();
  constructor() { }

  signupUser(email: string, password: string, name?: string) {
    //this is a promise so you can listen with .then

    return firebase.createUserWithEmailAndPassword(this.auth, email, password)
      .then(
        data => {
          console.log('create user: ', data);
          return firebase.updateProfile(this.auth.currentUser, { displayName: name }).then(
            () => {
              this.verifyEmail();
            }
          )
        })
  }

  verifyEmail() {
    return firebase.sendEmailVerification(this.auth.currentUser).then(
      (verified) => {
        this.email = this.auth.currentUser.email;
        firebase.getIdToken(this.auth.currentUser)
          .then(
            (token: string) => {
              this.token = token;
            }
          );
        console.log('Sending verifcation email :', this.email);
        return verified;
      });
  }

  isVerified(): boolean {
    let verified = this.auth ? this.auth.currentUser.emailVerified : false;
    if(verified){
      this.email = this.auth.currentUser.email;
      firebase.getIdToken(this.auth.currentUser)
        .then(
          (token: string) => {
            this.token = token;
          }
        );
    }
    console.log('logged in: ' , verified ? this.auth : '');
    return verified;
  }


  signInUser(email: string, password: string) {
    return firebase.signInWithEmailAndPassword(this.auth, email, password)
      .then(
        () => {
          console.log('user email verified ', this.isVerified());
          this.isSignedIn = true;
        }
      );
  }

  logout() {
    firebase.signOut(this.auth);
  }

}
