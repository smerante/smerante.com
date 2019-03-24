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
      apiKey: "AIzaSyAT2mNclO9GNrJJLRcg_edr7y5FAMeD8Wc",
      authDomain: "ng-recipe-book-afab5.firebaseapp.com"
    })
  }
}
