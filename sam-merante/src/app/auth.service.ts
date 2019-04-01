import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn: boolean;
  email: string;
  token: string;
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
        this.email = firebase.auth().currentUser.email;
        firebase.auth().currentUser.getIdToken()
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
    let verified = firebase.auth().currentUser ? firebase.auth().currentUser.emailVerified : false;
    if(verified){
      this.email = firebase.auth().currentUser.email;
      firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => {
            this.token = token;
          }
        );
    }
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
