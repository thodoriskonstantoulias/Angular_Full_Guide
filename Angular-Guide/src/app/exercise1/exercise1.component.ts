import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  toggleSecret = false;
  buttonClicks = [];
  clickTimes = 0;

  constructor() { }

  ngOnInit() {
  }

  onToggleSecret(){
    this.toggleSecret = !this.toggleSecret;
    this.buttonClicks.push(this.clickTimes++);
  }

}
