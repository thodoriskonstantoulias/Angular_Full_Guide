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
      apiKey: "Your data here",
      authDomain: "Your data here"
    });
  }
}
