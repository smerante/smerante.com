import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBv7rMr86OmhTlT7q8Gj4a59lXutxFdAyE",
      authDomain: "sam-merante.firebaseapp.com",
    })
  }
}
