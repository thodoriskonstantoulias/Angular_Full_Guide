import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Project';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB-LscIAzaCp9rPbMf1HP1gsV1PaYMgHT4",
      authDomain: "angular-full-guide-project.firebaseapp.com"
    });
  }
}
