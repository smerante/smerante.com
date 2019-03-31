import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn: boolean;

  constructor() { }

  signupUser(email: string, password: string, name?: string) {
    //this is a promise so you can listen with .then
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        data => {
          console.log('create user: ', data);
          return data.user.updateProfile({ displayName: name }).then(
            () => {
              this.verifyEmail();
            }
          )
        })
  }

  verifyEmail() {
    return firebase.auth().currentUser.sendEmailVerification().then(
      (verified) => {
        console.log('Sending verifcation email :', firebase.auth().currentUser.email);
        return verified;
      });
  }

  isVerified(): boolean {
    let verified = firebase.auth().currentUser ? firebase.auth().currentUser.emailVerified : false;
    console.log('logged in: ' , verified ? firebase.auth().currentUser : '');
    return verified;
  }


  signInUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        () => {
          console.log('user email verified ', this.isVerified());
          this.isSignedIn = true;
        }
      );
  }

  logout() {
    firebase.auth().signOut();
  }

}
